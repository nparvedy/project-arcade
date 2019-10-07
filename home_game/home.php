<?php
    require '../config/functions.php';
    require '../config/config.php';

    $connection = new BaseDeDonnees("localhost", "projet_arcade", "root", "");
    $connection->seConnecter();
    $bdd = $connection->bdd;

    session_start();

    if (!empty($_SESSION['pseudo'] || !empty($_SESSION['guest']))){
        
    }else {
        header('Location:../');
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Games</title>
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">

</head>

<body>

  <?php 
    ifUserOn();
  ?>

<main>

<?php
$recup = $bdd->query('SELECT * FROM game');

while($donnees = $recup->fetch())
{
?>
<div class="bloc-jeu">
    <a href="../borne/index.php?game=<?php echo $donnees['name']; ?>">
      <div class="titre" name="game">
        <?php echo $donnees['name']; ?>
      </div>
      <img src="<?php echo $donnees['image']; ?>" />
    </a>
</div>
<?php



}

$recup->closeCursor();
?>

</main>



<footer>


</footer>

<script src="script.js"></script>
<script src="caroussel.js"></script>
<script src="go.js"></script>


</body>


</html>
