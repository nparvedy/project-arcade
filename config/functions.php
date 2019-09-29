<?php 

function ifUserOn(){
    if (!empty($_SESSION['pseudo'] && !isset($_SESSION['guest']))){
        include '../accueil/menu.php';
    }else {
        return false;
    }
}

