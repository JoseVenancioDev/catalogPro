<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include './dbcon.php'; // Conexão com o banco de dados

// Recupera produtos do banco de dados
$query = "SELECT * FROM tb_produto";
$stmt = $pdo->query($query);
$produtosBanco = $stmt->fetchAll(PDO::FETCH_ASSOC);


// Envia a resposta JSON
echo json_encode($produtosBanco);
?>
