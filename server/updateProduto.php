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

// Conectar ao banco de dados
include 'dbcon.php'; 

// Lê os dados enviados via POST
$id = $_POST['id_produto'] ?? null;
$nome = $_POST['nome_produto'] ?? null;
$preco = $_POST['preco_produto'] ?? null;
$distribuidora = $_POST['distribuidora'] ?? null;
$validade = $_POST['data_validade'] ?? null;
$descricao = $_POST['descricao_produto'] ?? null;
$foto = null;

// Verifica se a foto foi enviada
if (isset($_FILES['foto_produto']) && $_FILES['foto_produto']['error'] === UPLOAD_ERR_OK) {
    $foto = basename($_FILES['foto_produto']['name']);
    $target_dir = 'img/';
    
    // Mover o arquivo para o diretório "img/"
    if (!move_uploaded_file($_FILES['foto_produto']['tmp_name'], $target_dir . basename($_FILES['foto_produto']['name']))) {
        echo json_encode(['success' => false, 'message' => 'Erro ao mover o arquivo de imagem']);
        exit;
    }
}


// Monta a query SQL para atualizar o produto
$query = "UPDATE tb_produto SET nome_produto = ?, preco_produto = ?, distribuidora = ?, data_validade = ?, descricao_produto = ?";
$params = [$nome, $preco, $distribuidora, $validade, $descricao];

if ($foto) {
    $query .= ", foto_produto = ?";
    $params[] = $foto;
}

// Verifica se o ID do produto foi fornecido
if ($id) {
    $query .= " WHERE id_produto = ?";
    $params[] = $id;

    // Prepara e executa a query
    $stmt = $pdo->prepare($query);
    $result = $stmt->execute($params);

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Produto atualizado com sucesso']);
        
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro ao atualizar o produto']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'ID do produto não fornecido']);
}

// Certifique-se de encerrar o script para evitar saídas não desejadas
exit;
?>
