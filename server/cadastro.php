<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $photo = $_FILES['photo'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

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

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);


$photoPath = null;
if ($photo && $photo['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    $photoPath = $uploadDir . uniqid() . '-' . basename($photo['name']);
    
    if (move_uploaded_file($photo['tmp_name'], $photoPath)) {
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro ao mover o arquivo de imagem.']);
        exit;
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Erro no upload da imagem: ' . $photo['error']]);
    exit;
}

    try {
        $stmt = $pdo->prepare('INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario, data_cadastro, foto_usuario) VALUES (?, ?, ?, CURDATE(), ?)');
        $stmt->execute([$fullname, $email, $hashedPassword, $photoPath]);

        echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
}
?>