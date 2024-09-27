<?php
// Permitir a origem http://localhost:3000
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Responder a requisições de preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit;
}

// Código PHP para lidar com a requisição POST
include './dbcon.php'; // Conexão com o banco de dados

// Lê os dados recebidos
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id_produto'])) {
    $id = $data['id_produto']; // Utilize o ID correto

    // Inicializa a consulta
    $query = "UPDATE tb_produto SET ";
    $params = [];

    // Adiciona campos que estão presentes no request
    if (isset($data['nome'])) {
        $query .= "nome_produto = :nome, ";
        $params[':nome'] = $data['nome'];
    }
    if (isset($data['preco'])) {
        $query .= "preco_produto = :preco, ";
        $params[':preco'] = $data['preco'];
    }
    if (isset($data['distribuidora'])) {
        $query .= "distribuidora = :distribuidora, ";
        $params[':distribuidora'] = $data['distribuidora'];
    }
    if (isset($data['validade'])) {
        $query .= "data_validade = :validade, ";
        $params[':validade'] = $data['validade'];
    }
    if (isset($data['descricao'])) {
        $query .= "descricao_produto = :descricao, ";
        $params[':descricao'] = $data['descricao'];
    }
    if (isset($data['foto_produto'])) {
        $query .= "foto_produto = :foto_produto, ";
        $params[':foto_produto'] = $data['foto_produto'];
    }

    // Remove a última vírgula e adiciona a condição WHERE
    $query = rtrim($query, ', ') . " WHERE id_produto = :id";
    $params[':id'] = $id;

    // Log da consulta e parâmetros
    error_log("Consulta SQL: " . $query);
    error_log("Parâmetros: " . print_r($params, true));

    // Prepara a consulta
    $stmt = $pdo->prepare($query);

    // Executa a consulta
    try {
        if ($stmt->execute($params)) {
            echo json_encode(["message" => "Produto atualizado com sucesso."]);
        } else {
            error_log(print_r($stmt->errorInfo(), true)); // Log de erro se a execução falhar
            echo json_encode(["message" => "Erro ao atualizar produto."]);
        }
    } catch (PDOException $e) {
        error_log("Erro: " . $e->getMessage());
        echo json_encode(["message" => "Erro ao atualizar produto: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["message" => "ID do produto não fornecido."]);
}
?>
