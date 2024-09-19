<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'config.php';

// Receber dados JSON
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); // Decodifica o JSON em um array associativo

// Verificar se os dados existem no array e adicionar mensagens de depuração
if (is_null($input)) {
    echo json_encode(['success' => false, 'message' => 'Dados inválidos recebidos.']);
    exit;
}

$fullname = $input['fullname'] ?? '';
$email = $input['email'] ?? '';
$username = $input['username'] ?? '';
$password = $input['password'] ?? '';
$confirmPassword = $input['confirmPassword'] ?? ''; // Certifique-se de que esta chave corresponde ao JSON enviado

// Verificar se todos os campos estão preenchidos
if (empty($fullname) || empty($email) || empty($username) || empty($password) || empty($confirmPassword)) {
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
    exit;
}

// Verificar se o email é válido
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido.']);
    exit;
}

// Verificar se as senhas coincidem
if ($password !== $confirmPassword) {
    echo json_encode(['success' => false, 'message' => 'As senhas não conferem.']);
    exit;
}

// Criptografar a senha
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

try {
    // Preparar e executar a inserção no banco de dados
    $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro) VALUES (?, ?, ?, CURDATE())');
    $stmt->execute([$fullname, $email, $hashedPassword]);

    echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
} catch (PDOException $e) {
    // Captura e exibe a mensagem de erro detalhada
    echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
}
?>
