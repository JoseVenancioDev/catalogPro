<?php
// Ativar exibição de erros para debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Permitir a origem http://localhost:3000
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Responder a requisições de preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit;
}

// Inclua o arquivo de conexão ao banco de dados
include './dbcon.php'; // Certifique-se de que o caminho está correto

// Verifica se o método é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados do produto
    $nome = $_POST['nome'] ?? null;
    $preco = $_POST['preco'] ?? null;
    $distribuidora = $_POST['distribuidora'] ?? null;
    $validade = $_POST['validade'] ?? null;
    $descricao = $_POST['descricao'] ?? null;
    $foto = $_POST['foto'] ?? null;

    // Inicializa a consulta
    $query = "INSERT INTO tb_produto (nome_produto, preco_produto, distribuidora, data_validade, descricao_produto";

    // Adiciona a coluna da foto se ela foi enviada
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] === UPLOAD_ERR_OK) {
        $foto = $_FILES['foto']['name'];
        $target = './img/' . basename($foto);
        move_uploaded_file($_FILES['foto']['tmp_name'], $target);
        $query .= ", foto_produto) VALUES (:nome, :preco, :distribuidora, :validade, :descricao, :foto)";
        $params = [
            ':foto' => $foto,
            ':nome' => $nome,
            ':preco' => $preco,
            ':distribuidora' => $distribuidora,
            ':validade' => $validade,
            ':descricao' => $descricao
        ];
    } else {
        $query .= " VALUES (:nome, :preco, :distribuidora, :validade, :descricao)";
        $params = [
            ':nome' => $nome,
            ':preco' => $preco,
            ':distribuidora' => $distribuidora,
            ':validade' => $validade,
            ':descricao' => $descricao
        ];
    }

    // Preparar e executar a query
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    echo json_encode(["message" => "Produto criado com sucesso!"]);
} else {
    echo json_encode(["error" => "Método não permitido."]);
}
?>
