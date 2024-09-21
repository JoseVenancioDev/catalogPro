<?php
$servername = "localhost";
$username = "root";
$password = "bdjmf";
$dbname = "catalogo_produtos";

try {
    $dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    $pdo = new PDO($dsn, $username, $password, $options);

    // Se precisar verificar a conexão:
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    die("Conexão falhou: " . $e->getMessage());
}
?>
