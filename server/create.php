<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "catalogo_produtos";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $nome = $_POST['nome_produto'];
        $preco = $_POST['preco_produto'];
        $distribuidora = $_POST['nome_fornecedor'];
        $validade = $_POST['data_validade'];
        $descricao = $_POST['descricao_produto'];

        // Salvando a foto
        if (isset($_FILES['foto'])) {
            $foto = $_FILES['foto'];
            $fotoNome = time() . '_' . $foto['name'];
            $destino = 'img/' . $fotoNome;
            move_uploaded_file($foto['tmp_name'], $destino);
        } else {
            $fotoNome = null;
        }

        // Inserindo o produto no banco de dados
        $sql = "INSERT INTO tb_produto (nome_produto, preco_produto, nome_fornecedor, data_validade, descricao_produto, foto_produto) 
                VALUES (:nome, :preco, :distribuidora, :validade, :descricao, :foto)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nome' => $nome,
            ':preco' => $preco,
            ':distribuidora' => $distribuidora,
            ':validade' => $validade,
            ':descricao' => $descricao,
            ':foto' => $fotoNome
        ]);

        echo json_encode(['success' => true]);
    }
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
