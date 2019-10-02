<?php 
session_start();

require '../config/functions.php';
require '../config/config.php';

$connection = new BaseDeDonnees("localhost", "projet_arcade", "root", "");
$connection->seConnecter();

$user['pseudo'] = $_SESSION['pseudo'];
$user['mail'] = $_SESSION['mail'];


?>
<html>
   <head>
      <title>TUTO PHP</title>
      <meta charset="utf-8">
      
    <link rel="stylesheet" href="../css/style.css" />
   </head>
   <body>
   <?php 
        ifUserOn();
    ?>
      <div >
         <h2>PROFIL</h2>
         <div >
            <form method="POST" action="" enctype="multipart/form-data">
               <label>Pseudo :</label>
               <input type="text" name="newpseudo" placeholder="Pseudo" value="<?php echo $user['pseudo']; ?>" /><br /><br />
               <label>Mail :</label>
               <input type="text" name="newmail" placeholder="Mail" value="<?php echo $user['mail']; ?>" /><br /><br />
               <label>Mot de passe :</label>
               <input type="password" name="newmdp1" placeholder="Mot de passe"/><br /><br />
               <label>Confirmation - mot de passe :</label>
               <input type="password" name="newmdp2" placeholder="Confirmation du mot de passe" /><br /><br />
               <label for=""></label>
               <input type="file" name="avatar"><br><br>
               <input type="submit" value="Mettre à jour mon profil !" />
            </form>
            <?php if(isset($msg)) { echo $msg; } ?>
         </div>
      </div>
   </body>
</html>
<?php
 include '../launcher/db.php';
 require '../launcher/functions.php';

if(isset($_SESSION['id']))
{
   $requser = $bdd->prepare("SELECT * FROM user WHERE id = ?");
   $requser->execute(array($_SESSION['id']));
   $user = $requser->fetch();
   if(isset($_POST['newpseudo']) AND !empty($_POST['newpseudo']) AND $_POST['newpseudo'] != $user->pseudo)
   {
      $newpseudo = htmlspecialchars($_POST['newpseudo']);
      $insertpseudo = $bdd->prepare("UPDATE user SET pseudo = ? WHERE id = ?");
      $insertpseudo->execute(array($newpseudo, $_SESSION['id']));
      header('Location: home.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['newmail']) AND !empty($_POST['newmail']) AND $_POST['newmail'] != $user->mail)
   {
      $newmail = htmlspecialchars($_POST['newmail']);
      $insertmail = $bdd->prepare("UPDATE user SET mail = ? WHERE id = ?");
      $insertmail->execute(array($newmail, $_SESSION['id']));
      // header('Location: home.php?id='.$_SESSION['id']);
      echo "vous avez bien modifier votre e-mail";
   }
   if(isset($_POST['newmdp1']) AND !empty($_POST['newmdp1']) AND isset($_POST['newmdp2']) AND !empty($_POST['newmdp2'])) 
    {
      $mdp1 = md5($_POST['newmdp1']);
      $mdp2 = md5($_POST['newmdp2']);
      if($mdp1 == $mdp2)
      {
         $insertmdp = $bdd->prepare("UPDATE user SET password = ? WHERE id = ?");
         $insertmdp->execute(array($mdp1, $_SESSION['id']));
         // header('Location: home.php?id='.$_SESSION['id']);
         echo "Vous avez bien modifier votre mot de passe";
      } 
      else 
      {
         $msg = "Vos deux mdp ne correspondent pas !";
      }
   }
   if(isset($_POST["newpseudo"]) AND $_POST["newpseudo"] == $user->pseudo)
   {
    // header('Location: home.php?id='.$_SESSION['id']);
    } 
}

else {
   header('Location:index.php');
}




if(isset($_FILES['avatar']) AND !empty($_FILES['avatar']['name']))
{
   $tailleMax = 2097152;
//    2097152 equivaut à 2mo, ca s'ecrit comme ça, j'ai pas inventé
   $formatsValides = array('jpg', 'jpeg', 'gif', 'png');
   if($_FILES['avatar']['size'] <= $tailleMax)
   {
      $extensionUpload = strtolower(substr(strrchr($_FILES['avatar']['name'], '.'), 1));
      if(in_array($extensionUpload, $formatsValides))
      {
         $dossier = "dossier/avatars/".$_SESSION['id'].".".$extensionUpload;
         $transfert = move_uploaded_file($_FILES['avatar']['tmp_name'], $dossier);
         if($transfert)
         {
            $updateavatar = $bdd->prepare('UPDATE user SET avatar = :avatar WHERE id = :id');
            $updateavatar->execute(array(
               'avatar' => $_SESSION['id'].".".$extensionUpload,
               'id' => $_SESSION['id']
               ));
            header('Location: home.php?id='.$_SESSION['id']);
         } else
         {
            $msg = "Erreur lors de l'importation de la photo";
         }
      } else
      {
         $msg = "Votre photo de profil n'est pas au bon format";
      }
   } else {
      $msg = "Votre photo de profil dépasse les 2Mo";
   }
}
?>
