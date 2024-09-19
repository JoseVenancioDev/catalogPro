<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Inclua o arquivo de conexão com o banco de dados
include 'dbcon.php'; // Certifique-se de que $pdo está definido corretamente aqui

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    // Verifica campos obrigatórios
    if (empty($fullname) || empty($email) || empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    // Valida email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Email inválido.']);
        exit;
    }

    // Verifica senhas
    if ($password !== $confirmPassword) {
        echo json_encode(['success' => false, 'message' => 'As senhas não conferem.']);
        exit;
    }

    // Criptografa a senha
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        // Prepara a consulta
        $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro) VALUES (?, ?, ?, CURDATE())');
        $stmt->execute([$fullname, $email, $hashedPassword]);

        echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
}
?>
