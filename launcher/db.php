<?php

$bdd = new PDO('mysql:dbname=projet_arcade;host=localhost', 'root', '');
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ); 