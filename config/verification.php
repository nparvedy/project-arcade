<?php 
session_start();
if (!empty($_SESSION['pseudo']) && $_SESSION['admin'] == true){
    header('Location:../admin/admin.php');
}else if (!empty($_SESSION['pseudo'])){
    header('Location:../settings/profil.php');
}else {
    header('Location:../admin/admin_connexion.php');
}