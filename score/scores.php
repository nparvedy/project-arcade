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
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/scores.css" />
    <title>Arcade - scores</title>
</head>
<body>
    <?php 
        ifUserOn();
    ?>

    <main>
        <section id="left">
            <h2>Jeu :</h2>
            <?php 
                $reponse = $bdd->query('SELECT name FROM game');
                while ($donnees = $reponse->fetch()){
                    ?>
                        <ul>
                            <li>
                                <form method="post" action="">
                                    <input type="submit" value="<?= $donnees['name']; ?>" name="jeu">
                        
                                    <?php $reponse_score = $bdd->query('SELECT * 
                                    FROM game
                                    INNER JOIN game_score, user
                                    WHERE game.id = game_score.id_game AND user.id = game_score.id_user'); 
                                    $donnees_scores = $reponse_score->fetch();
                                    ?>
                                    : <?php echo $donnees_scores['score'];?>
                                </form>
                            </li>
                        </ul>
                    <?php
                }
            ?>
        </section>

        <section id="right">
            
        </section>
    </main>