<?php
    require '../config/functions.php';
    require '../config/config.php';

    $connection = new BaseDeDonnees("localhost", "projet_arcade", "root", "");
    $connection->seConnecter();

    session_start();

    if (!empty($_SESSION['pseudo'] && !isset($_SESSION['guest']))){
        
    }else {
        header('Location:../');
    }
    
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/profil.css" />
    <title>Arcade - profil</title>
</head>
<body>
    <?php 
        ifUserOn();
    ?>

    <main>
        <section id="avatar">
            <img src="../images-hub/cercle.png">
        </section>

        <section id="settings">
            <input type="text" name="pseudo" value="<?= $_SESSION['pseudo']; ?>">
            <input type="text" name="mail" value="<?= $_SESSION['mail']; ?>">
        </section>

        <section id="tools">
            <h2>Voulez vous modifier vos identifiants ? </h2>
            <form action="profil.php" method="post">
                <input type="submit" name="modifier" value="modifier">
            </form>
        </section>
    </main>

</body>
</html>