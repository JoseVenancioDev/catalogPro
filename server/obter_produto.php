<?php
ob_start(); // Inicia o buffer de saída

// Configurações de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Habilita a exibição de erros (para debug)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Inclui o arquivo de conexão
include "dbcon.php";

try {
    // Prepara a consulta para evitar injeções de SQL
    $stmt = $pdo->query("SELECT * FROM tb_produto ORDER BY id_produto DESC LIMIT 5");
    
    // Obtém os produtos
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Retorna os produtos em formato JSON
    echo json_encode($produtos);
} catch (PDOException $e) {
    // Retorna erro em formato JSON
    echo json_encode(["erro" => "Erro: " . $e->getMessage()]);
}

ob_end_flush(); // Envia a saída e limpa o buffer
?>
