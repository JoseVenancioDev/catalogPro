<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verifique a autenticação se necessário
// if (!isset($_SESSION['email_usuario'])) {
//     echo json_encode(['erro' => 'Usuário não autenticado.']);
//     http_response_code(401);
//     exit();
// }

include './dbcon.php';

if (!$pdo) {
    echo json_encode(['erro' => 'Erro na conexão com o banco de dados.']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $validade = $_POST['validade'];

    // Manipulação da imagem
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == UPLOAD_ERR_OK) {
        $foto = $_FILES['foto']['name'];
        $target_dir = "C:/xampp/htdocs/catalogPro/server/img/";
        $target_file = $target_dir . basename($foto);

        // Verifique se o diretório existe
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0755, true);
        }

        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES['foto']['tmp_name'], $target_file)) {
            $sql = "INSERT INTO tb_produto (nome_produto, descricao_produto, preco_produto, data_validade, foto_produto) VALUES (?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$nome, $descricao, $preco, $validade, $target_file]);

            echo json_encode(['mensagem' => 'Produto criado com sucesso!']);
        } else {
            echo json_encode(['erro' => 'Erro ao fazer upload da foto.']);
        }
    } else {
        echo json_encode(['erro' => 'Nenhuma foto enviada ou erro no envio da foto.']);
    }
}
?>
