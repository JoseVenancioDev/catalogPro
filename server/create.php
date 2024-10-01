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
include './dbcon.php';

// Verifica se o método é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados do produto
    $nome = $_POST['nome'] ?? null;
    $preco = $_POST['preco'] ?? null;
    $distribuidora = $_POST['distribuidora'] ?? null;
    $validade = $_POST['validade'] ?? null;
    $descricao = $_POST['descricao'] ?? null;

    // Variável para o nome da foto (pode ser null se não enviada)
    $foto = null;

    // Verifica se uma foto foi enviada
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] === UPLOAD_ERR_OK) {
        $foto = $_FILES['foto']['name'];
        $target = './img/img' . basename($foto);
        
        // Move o arquivo de upload
        if (!move_uploaded_file($_FILES['foto']['tmp_name'], $target)) {
            echo json_encode(["error" => "Falha ao mover o arquivo da foto."]);
            exit;
        }
    }

    try {
        // Inicializa a query de inserção
        $query = "INSERT INTO tb_produto (nome_produto, preco_produto, distribuidora, data_validade, descricao_produto, foto_produto)
                  VALUES (:nome, :preco, :distribuidora, :validade, :descricao, :foto)";
        
        // Prepara e executa a query
        $stmt = $pdo->prepare($query);
        $stmt->execute([
            ':nome' => $nome,
            ':preco' => $preco,
            ':distribuidora' => $distribuidora,
            ':validade' => $validade,
            ':descricao' => $descricao,
            ':foto' => $foto // Pode ser null se não enviada
        ]);

        echo json_encode(["message" => "Produto criado com sucesso!"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => "Erro ao cadastrar o produto: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Método não permitido."]);
}
?>