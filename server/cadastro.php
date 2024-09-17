<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirm_password'] ?? '';

    if (empty($fullname) || empty($email) || empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Email inválido.']);
        exit;
    }

    if ($password !== $confirmPassword) {
        echo json_encode(['success' => false, 'message' => 'As senhas não conferem.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare('SELECT * FROM tb_usuario WHERE email_usuario = ? OR nome_usuario = ?');
        $stmt->execute([$email, $username]);
        $existingUser = $stmt->fetch();

        if ($existingUser) {
            if ($existingUser['email_usuario'] === $email) {
                echo json_encode(['success' => false, 'message' => 'Este email já está registrado.']);
            } else if ($existingUser['nome_usuario'] === $username) {
                echo json_encode(['success' => false, 'message' => 'Este nome de usuário já está registrado.']);
            }
            exit;
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro) VALUES (?, ?, ?, CURDATE())');
        $stmt->execute([$fullname, $email, $hashedPassword]);

        echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
}
?>
