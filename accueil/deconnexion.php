<?php 
session_start();
session_destroy();

header('Location:../admin/admin_connexion.php');