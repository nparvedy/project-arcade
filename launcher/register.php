<?php   require_once('db.php');
        require 'functions.php'; 
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

<h2> Créer un compte </h2>

    <form action="" method="POST">

        <p>pseudo</p><input type="text" name="Pseudo"> <!-- new pseudo -->
        <p>password</p><input type="password" name="password" > <!-- new mdp --> 
        <p>comfirm password</p> <input type="password" name="passwordVerif" > <!-- comfirmation du new mdp --> 

        <input type="submit" value="Créer">

    </form>
 <?php 
// if(!empty($_POST))
// {

//     $errors = array();

//     if(empty($_POST['Pseudo']) || !preg_match('/^[a-zA-Z0-9_]+$/', $_POST['Pseudo']))
//     {

//         $errors['Pseudo']= "votre pseudo n'est pas valide (alphanumerique)";
//     }
//     if(empty($_POST['password']))
//     {

//         $errors['password'] = "votre mot de passe n'est pas valide";
//     }
//     if($_POST['password'] != $_POST['passwordVerif'])
//     {

//         $errors['verif'] = "vos mots de passes sont différents ";
//      }
    

//     if(empty($errors))
//     {

//         require_once('db.php');
//         $req = $pdo->prepare("INSERT INTO user SET pseudo = ?, password = ?");
//         $password = md5($_POST['password']);
//         $req->execute([$_POST['Pseudo'], $password]);
//         die('votre compte a bien été créer');
   

   
//     }
//     debug($errors);
    
// }

if (isset($_POST['Pseudo']) & isset($_POST['password']) & isset($_POST['passwordVerif'])) {
    
    if (empty($_POST['Pseudo']) OR empty($_POST['password']) OR empty($_POST['passwordVerif'])) {

        echo 'remplir les champs';
    }else {
       
        if ($_POST['password'] == $_POST['passwordVerif']) {

            $password = md5($_POST['password']);

            $req = $bdd->prepare("INSERT INTO user SET pseudo = ?, password = ?");
            $req->execute(array($_POST['Pseudo'], $password));
            header('location:../index.php');

        }
        else {
            echo 'les mots de passe ne sont pas bons !';
        }
    }
}
?>
</body>
</html>