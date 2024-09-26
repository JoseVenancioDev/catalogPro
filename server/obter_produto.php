<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "catalogo_produtos";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT * FROM tb_produto ORDER BY id DESC LIMIT 5");
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($produtos);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
