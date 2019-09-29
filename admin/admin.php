<?php 

require '../config/functions.php';
require '../config/config.php';

$connection = new BaseDeDonnees("localhost", "projet_arcade", "root", "");
$connection->seConnecter();

session_start();

if (!empty($_SESSION['pseudo']) && $_SESSION['admin'] == true){
    
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
    <link rel="stylesheet" href="main_css/admin.css" />
    <title>Arcade - admin</title>
</head>
<body>
    <?php 
        ifUserOn();
    ?>

    <div id="main_admin">
        <div id="list_user">
            <h1>Listes des inscrits : </h1>
            <ul id="main_name">
                <li>
                    Pseudo
                </li>

                <li>
                    mail
                </li>

                <li>
                    Date d'inscription
                </li>

                <li>
                    Supprimer Y/N
                </li>
            </ul>

            <?php 
            $bdd = $connection->bdd;
                $reponse = $bdd->query('SELECT * FROM user INNER JOIN logs ON user.id = logs.id_user AND user.admin = false');
                while ($donnees = $reponse->fetch()){

            ?>

            <ul id="main_user">
                <li>
                    <?php echo $donnees['pseudo']; ?>
                </li>

                <li>
                    <?php echo $donnees['id_user']; ?>
                </li>

                <li>
                <?php echo $donnees['date']; ?>
                </li>

                <li>
                    <form method="post" action="">
                        <input type="submit" name="supprimer" value="Supprimer">
                    </form>
                    <?php 
                        if(isset($_POST['supprimer'])){

                            $req = $bdd->prepare('DELETE FROM user 
                            WHERE id = ?');
                            $req->execute(array($donnees['id_user']));

                            $req = $bdd->prepare('DELETE FROM logs
                            WHERE id_user = ?');
                            $req->execute(array($donnees['id_user']));

                    }
                    ?>

                </li>
            </ul>
            <?php 
                }
                $reponse->closeCursor();
            ?>
        </div>
    </div>
</body>
</html>