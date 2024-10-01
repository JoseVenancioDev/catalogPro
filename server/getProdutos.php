<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Responder a requisições de preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit;
}


include './dbcon.php'; // Conexão com o banco de dados

// Recupera produtos do banco de dados
$query = "SELECT * FROM tb_produto";
$stmt = $pdo->query($query);
$produtosBanco = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Envia a resposta JSON com o URL da imagem
echo json_encode(array_map(function($produto) {
    $produto['foto_produto'] = 'http://localhost/catalogPro/server/' . $produto['foto_produto'];
    return $produto;
}, $produtosBanco));
?>
