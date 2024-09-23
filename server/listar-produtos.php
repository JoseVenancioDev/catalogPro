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

$sql = "SELECT * FROM tb_produto";
$result = $conn->query($sql);
$produtos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}

echo json_encode($produtos);
$conn->close();
?>
