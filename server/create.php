<?php
session_start();
header("Access-Control-Allow-Origin: *"); // Permite qualquer origem
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Permite apenas certos métodos HTTP
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Define os headers permitidos
if (!isset($_SESSION['email_usuario'])) {
    header("Location: login.php");
    exit();
include 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $validade = $_POST['validade'];
    $foto = $_FILES['foto']['name'];
    $target_dir = "img/";
    $target_file = $target_dir . basename($foto);

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES['foto']['tmp_name'], $target_file)) {
        $sql = "INSERT INTO tb_produto (nome_produto, descricao_produto, preco_produto, data_validade, foto_produto) VALUES ('$nome', '$descricao', '$preco', '$validade', '$target_file')";

        if ($conn->query($sql) === TRUE) {
            echo "Produto criado com sucesso!";
        } else {
            echo "Erro ao criar produto: " . $conn->error;
        }
    } else {
        echo "Erro ao fazer upload da foto.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Criar Produto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .container2 {
            width: 10%;
            margin: autos;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #77aaff 3px solid;
        }
        header a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        header ul {
            padding: 0;
            list-style: none;
        }
        header li {
            float: left;
            display: inline;
            padding: 0 20px 0 20px;
        }
        header #branding {
            text-align: center;
        }
        header #branding h1 {
            margin: 0;
        }
        header nav {
            float: right;
            margin-top: 10px;
        }
        form {
            background: #fff;
            padding: 20px;
            margin-top: 20px;
            border: 1px solid #ccc;
        }
        form label {
            display: block;
            margin-bottom: 10px;
        }
        form input[type="text"],
        form input[type="date"],
        form textarea,
        form input[type="file"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
        }
        form input[type="submit"] {
            display: block;
            width: 100%;
            background: #333;
            color: #fff;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        form input[type="submit"]:hover {
            background: #555;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div id="branding">
                <h1>Criar Produto</h1>
            </div>
            <nav>
                <ul>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
    
        <form method="post" enctype="multipart/form-data">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" required></textarea>
            <label for="preco">Preço:</label>
            <input type="number" step="0.01" id="preco" name="preco" required>
            <label for="validade">Validade:</label>
            <input type="date" id="validade" name="validade" required>
            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto" required>
            <input type="submit" value="Criar Produto">
        </form>
        <form>
        
        </form>
    </div>
    <div class="container2">
    <input type="submit" value="voltar ao catalogo">
</div>
</body>
</html>