<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="main_css/admin.css" />
    <title>Arcade - admin</title>
</head>
<body>
    <?php include "../accueil/menu.php" ?>

    <div id="main_admin">
        <div id="list_user">
            <h1>Listes des inscrits : </h1>
            <ul id="main_name">
                <li>
                    Pseudo
                </li>

                <li>
                    mail
                </li>

                <li>
                    Date d'inscription
                </li>

                <li>
                    Supprimer Y/N
                </li>
            </ul>
            <ul id="main_user">
                <li>
                    Tom
                </li>

                <li>
                    top@gmail.com
                </li>

                <li>
                    27/09/2019
                </li>

                <li>
                    <button>supprimer l'utilisateur</button>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>