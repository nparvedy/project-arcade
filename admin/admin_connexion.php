<?php 
session_start();
require '../config/config.php';
$connection = new BaseDeDonnees("localhost", "projet_arcade", "root", "");
$connection->seConnecter();
$bdd = $connection->bdd;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
if (empty($_SESSION['pseudo'])){
    if (!isset($_POST['pseudo'])) //On est dans la page de formulaire
    {
        echo '<form method="post" action="admin_connexion.php">
        <fieldset>
        <legend>Connexion</legend>
        <p>
        <label for="pseudo">Pseudo :</label><input name="pseudo" type="text" id="pseudo" /><br />
        <label for="password">Mot de Passe :</label><input type="password" name="password" id="password" />
        </p>
        </fieldset>
        <p><input type="submit" value="Connexion" /></p></form>
        <a href="./register.php">Pas encore inscrit ?</a>
        
        </div>
        </body>
        </html>';
    }else{
        if(empty($_POST['pseudo']) || empty($_POST['password']))
        {
            echo "erreur";
        }else {
            $query = $bdd->prepare('SELECT * FROM user WHERE pseudo = :pseudo');
            $query->bindValue(':pseudo', $_POST['pseudo'], PDO::PARAM_STR);
            $query->execute();
            $data = $query->fetch();
            if ($data['password'] == $_POST['password']){
                $_SESSION['pseudo'] = $data['pseudo'];
                $_SESSION['admin'] = $data['admin'];
                $_SESSION['mail'] = $data['mail'];
                echo $_SESSION['pseudo'];
                header('Location:admin.php');
            }else {
                echo "désolé";
            }
            $query->CloseCursor();
        }
    }
}else {
    header('Location:admin.php');

}
?>

</body>
</html>