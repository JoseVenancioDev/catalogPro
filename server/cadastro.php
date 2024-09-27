<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

include 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receive the form data
    $fullname = $_POST['fullname'] ?? null;
    $email = $_POST['email'] ?? null;
    $username = $_POST['username'] ?? null;
    $password = trim($_POST['password'] ?? '');
    $confirmPassword = trim($_POST['confirm_password'] ?? '');

    // Log incoming data for debugging
    error_log("Fullname: $fullname, Email: $email, Username: $username, Password: $password, Confirm Password: $confirmPassword");

    if (empty($fullname) || empty($email) || empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Email inválido.']);
        exit;
    }

    // Check if passwords match
    if ($password !== $confirmPassword) {
        error_log("Passwords do not match. Password: $password, Confirm Password: $confirmPassword");
        echo json_encode(['success' => false, 'message' => 'As senhas não conferem.']);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro) VALUES (?, ?, ?, CURDATE())');
        $stmt->execute([$fullname, $email, $hashedPassword]);
        echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
}
?>
