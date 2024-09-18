<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email_usuario'];
    $password = $data['senha_usuario'];

    if (empty($email) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Email e senha são obrigatórios.']);
        exit;
    }

    try {
        $stmt = $pdo->prepare('SELECT * FROM tb_usuario WHERE email_usuario = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['senha_usuario'])) {
            $_SESSION['email_usuario'] = $email;
            $_SESSION['id_usuario'] = $user['id_usuario']; // Adicionando ID do usuário à sessão
            echo json_encode(['success' => true, 'message' => 'Login realizado com sucesso!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Email ou senha inválidos.']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Erro ao processar o login: ' . $e->getMessage()]);
    }
}
?>
