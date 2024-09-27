<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Permite requisições da origem http://localhost:3000
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Adicione outros cabeçalhos, se necessário

// Responde a preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Termina a execução para preflight requests
}

include './dbcon.php'; // Conexão com o banco de dados

// Lê os dados recebidos
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['deleteId'])) {
    $deleteId = $data['deleteId'];

    // Exclui o produto do banco de dados
    $query = "DELETE FROM tb_produto WHERE id_produto = :id"; // Corrigido para usar o campo correto
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $deleteId, PDO::PARAM_INT);
    
    if ($stmt->execute()) {
        echo json_encode(['mensagem' => 'Produto deletado com sucesso']);
    } else {
        echo json_encode(['erro' => 'Erro ao deletar produto']);
    }
} else {
    echo json_encode(['erro' => 'ID do produto não fornecido']);
}
?>
