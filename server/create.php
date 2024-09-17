<?php
include 'dbcon.php';

$sql = "SELECT * FROM tb_produto";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Catálogo de Produtos</title>
    <a href="css/index.css"></a>
</head>
<body>
    <header>
        <div class="container">
            <div id="branding">
                <h1>Catálogo de Produtos</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="create.php" class="btn">Adicionar Produto</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Validade</th>
                <th>Foto</th>
                <th>Ações</th>
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
                    <a href="edit.php?id=<?php echo $row['id_produto']; ?>" class="btn">Editar</a>
                    <a href="delete.php?id=<?php echo $row['id_produto']; ?>" class="btn">Excluir</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </table>
    </div>
</body>
</html>
