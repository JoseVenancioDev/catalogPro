<?php
session_start();
if (!isset($_SESSION['email_usuario'])) {
    header("Location: login.php");
    exit();
}

include 'dbcon.php';

$sql = "SELECT * FROM tb_produto";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/index.css">
    <title>Catálogo de Produtos</title>
    <style>
        .thumbnail {
            width: 100px; /* Ajuste o tamanho da miniatura conforme necessário */
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Catálogo de Produtos</h1>
    <p>Bem-vindo, <?php echo $_SESSION['email_usuario']; ?>! <a href="logout.php">Logout</a></p>
    <a href="create.php">Adicionar Produto</a>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Validade</th>
            <th>Foto</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id_produto']; ?></td>
            <td><?php echo $row['nome_produto']; ?></td>
            <td><?php echo $row['descricao_produto']; ?></td>
            <td><?php echo $row['preco_produto']; ?></td>
            <td><?php echo $row['data_validade']; ?></td>
            <td>
            <?php
                $fotoProduto = htmlspecialchars($row['foto_produto']);
                $caminhoCompleto = "img/" . $fotoProduto;
                if (file_exists($caminhoCompleto) && !empty($fotoProduto)): ?>
                    <img src="<?php echo $caminhoCompleto; ?>" alt="Foto do Produto" class="thumbnail">
                <?php else: ?>
                    <p>Imagem não disponível</p>
                <?php endif; ?>
            </td>
            <td>
                <a href="edit.php?id=<?php echo $row['id_produto']; ?>">Editar</a>
                <a href="delete.php?id=<?php echo $row['id_produto']; ?>">Excluir</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>