<?php
include 'config.php';

$id = $_GET['id'];
$sql = "SELECT * FROM tb_produto WHERE id_produto=$id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $validade = $_POST['validade'];
     // Processamento do upload da imagem
     if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
        $foto = $_FILES['foto']['name'];
        $target_dir = "img/";
        $target_file = $target_dir . basename($foto);
        move_uploaded_file($_FILES['foto']['tmp_name'], $target_file);
    } else {
        $foto = $row['foto_produto']; // Mantém a foto antiga se nenhuma nova foto for enviada
    }
    $sql = "UPDATE tb_produto SET nome_produto='$nome', descricao_produto='$descricao', preco_produto='$preco', data_validade='$validade', foto_produto='$foto' WHERE id_produto=$id";

    if ($conn->query($sql) === TRUE) {
        header('Location: index.php');
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Editar Produto</title>
</head>
<body>
    <h1>Editar Produto</h1>
    <form method="post" enctype="multipart/form-data">
        Nome: <input type="text" name="nome" value="<?php echo $row['nome_produto']; ?>" required><br>
        Descrição: <textarea name="descricao"><?php echo $row['descricao_produto']; ?></textarea><br>
        Preço: <input type="number" step="0.01" name="preco" value="<?php echo $row['preco_produto']; ?>" required><br>
        validade: <input type="date" name="validade" ><br>
        foto: <input type="file"  name="foto" id="foto">
            <label class="custom-file-label" for="exampleInputFile"></label>
        <button type="submit">Atualizar</button>
    </form>
</body>
</html>
