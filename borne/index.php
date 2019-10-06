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

    $id_jeu = 2;
    $_POST['game'] = "shifumi";
    
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/borne.css" />
    <title>Arcade - scores</title>
</head>
<body>
    <?php 
        ifUserOn();
    ?>
    
    <div id="btn_game">
                <input type="submit" value="play" id="playBtn">
                <input type="submit" value="pause" id="pause">
                <input type="submit" value="reset" id="resetBtn" ><br />

                
    </div>
    <main>
        <section id="left">

        </section>

        <section id="right">
            <h1>SCORE</h1>

            <p>
                <?php 
                    /**
                     * récupère le score de l'utilisateur en fonction du jeu
                     */
                    $bdd = $connection->bdd;
                    $reponse = $bdd->prepare('SELECT * FROM game_score INNER JOIN game ON game_score.id_game = game.id  WHERE id_game = :id_jeu AND id_user = :id ');
                    $reponse->bindValue(':id_jeu', $id_jeu, PDO::PARAM_STR);
                    $reponse->bindValue(':id', $_SESSION['id'], PDO::PARAM_STR);
                    $reponse->execute();
                    $score = $reponse->fetch();

                    echo $score['score'];
                    
                    ?>
            </p>
        </section>
    </main>
    <script src="./scripts/borne.js"></script>
    <script src="functions.js"></script>
    <script type="text/javascript" src="<?php echo $_POST['game']; ?>.js"></script>
    <script src="test_borne.js"></script>
</body>
</html>