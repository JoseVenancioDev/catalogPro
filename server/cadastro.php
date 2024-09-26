<?php
header('Access-Control-Allow-Origin: *'); // Permitir todas as origens (ou ajuste para permitir apenas a origem do seu frontend)
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Métodos permitidos
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Cabeçalhos permitidos
header('Content-Type: application/json, multipart/form-data');

// O restante do seu código PHP

// Inclui o arquivo de conexão com o banco de dados
include 'dbcon.php'; // Certifique-se de que $pdo está definido corretamente aqui

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados do formulário
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $username = $_POST['username']; // Note que o 'username' não está sendo usado na query abaixo
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (empty($fullname) || empty($email) || empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    // Valida o formato do email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Email inválido.']);
        exit;
    }

    // Verifica se as senhas coincidem
    if ($password !== $confirmPassword) {
        echo json_encode(['success' => false, 'message' => 'As senhas não conferem.']);
        exit;
    }

    // Criptografa a senha
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        // Prepara a consulta para inserir o novo usuário
        $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro) VALUES (?, ?, ?, CURDATE())');
        $stmt->execute([$fullname, $email, $hashedPassword]);

        // Retorna uma resposta de sucesso em JSON
        echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
    } catch (PDOException $e) {
        // Retorna uma mensagem de erro em JSON
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
}
?>
