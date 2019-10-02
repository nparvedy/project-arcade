<?php session_start(); 
if(empty($_SESSION['pseudo'])){

  header("location:../index.php");
}

try
{

  $bdd = new PDO ('mysql:host=localhost;dbname=projet_arcade;charset=utf8', 'root','');

}
catch (Exception $e)
{
  die('Erreur : '.$e->getMessage);

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Games</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet">

</head>

<body>


<ul>
  <li id="menu_arcade"><a href="#arcade"></a><svg viewBox="0 0 960 300"><symbol id="s-text">
            <text id="arcade" text-anchor="middle" x="50%" y="40%">ARCADE
            </text>
        </symbol>
       <g class = "g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
        </g> 
    </svg>
    </li>
  <li id="menu_pseudo"><a href="#pseudo">  welcome <br><?php echo $_SESSION['pseudo'];   ?></a></li>
  <a href="#scores"><li class="menu_spd">Scores<img id="score" src="trophe.png" width="55px" height="55px"></li></a>
  <li class="menu_spd"><a href="paramtest.php">Paramètres</a><img id="param" src="parametre.png" widht="55px" height="55px"></li>
  <li class="menu_spd"><a href="deco.php">Déconnexion</a><img id="deco" src="deconnexion.png" width="55px" height="55px"></li>

</ul>

<main>

<?php
$recup = $bdd->query('SELECT avatar FROM user LIMIT 0,6');

while($donnees = $recup->fetch())
{
?>
<div class="bloc-jeu">
<img src="<?php echo $donnees['avatar']; ?>"/>
</div>
<?php


}

$recup->closeCursor();
?>

</main>



<footer>


</footer>

<script src="script.js"></script>


</body>


</html>

