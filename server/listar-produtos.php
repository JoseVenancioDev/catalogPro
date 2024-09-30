<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "catalogo_produtos";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Conexão falhou: " . $e->getMessage());
}

// Use PDO para executar a consulta
$sql = "SELECT * FROM tb_produto";
$result = $pdo->query($sql);
$produtos = [];

if ($result->rowCount() > 0) {
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        // Adiciona a URL da imagem ao array de produtos
        $row['foto'] = "http://localhost/catalogPro/server/img/" . $row['foto_produto']; // Ajuste o caminho se necessário
        $produtos[] = $row;
    }
}

// Retorna os produtos como JSON
header('Content-Type: application/json');
echo json_encode($produtos);
?>
