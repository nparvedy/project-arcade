<?php


if(isset($_POST['copseudo']) & isset($_POST['copsw'])) {

    if(empty($_POST['copseudo']) OR empty($_POST['copsw'])) {

        echo 'remplir les champ';
    }
    else {
        $password = md5($_POST['copsw']);

        $req = $bdd->prepare('SELECT * FROM user WHERE pseudo = ? AND password = ? LIMIT 1');
        $req->execute(array($_POST['copseudo'], $password));
        $result = $req->fetch(PDO::FETCH_ASSOC);
        //var_dump($result);
        if ($_POST['copseudo'] === $result['pseudo'] AND $password === $result['password']) {
           session_start();
           $_SESSION['pseudo'] = $_POST['copseudo']; 
           $_SESSION['id'] = $result['id'];
           $_SESSION['mail'] = $result['mail'];
           $_SESSION['avatar'] = $result['avatar'];
           
           header('location:./settings/profil.php');
        }else {
            echo 'pseudo ou mdp incorrect';
        }
    }
}
?>