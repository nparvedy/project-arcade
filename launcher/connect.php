<?php   include 'db.php';
        require 'functions.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>acceuil</title>
</head>
<body>
<div id="blocAcc"> 

<div id="blocDemoAcc">




</div>
<!-- Se connecter --> 

<div id="blocConnectAcc">
    <h2> Connectez vous</h2>

    <form action="" method="POST">

        <input type="text" name="copseudo"> <!-- pseudo --> 
        <input type="password" name="copsw"> <!-- mdp --> 
        <input type="submit" value="Se connecter"> 

    </form>
    <?php require_once 'connection.php'; ?>
    <a href="register.php"><button id="create"> Créer un compte ? </button></a>
</div>
</div>




 <script src="main.js"></script>   
</body>
</html>
