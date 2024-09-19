<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $sql = "DELETE FROM tb_produto WHERE id_produto=$id";

    if ($conn->query($sql) === TRUE) {
        header('Location: index.php');
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
} else {
    $id = $_GET['id'];
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Excluir Produto</title>
</head>
<body>
    <h1>Excluir Produto</h1>
    <p>Tem certeza que deseja excluir este produto?</p>
    <form method="post">
        <input type="hidden" name="id" value="<?php echo $id; ?>">
        <button type="submit">Sim</button>
        <button type="button" onclick="window.location.href='index.php'">Não</button>
    </form>
</body>
</html>
