<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form method="post" action="register.php" enctype="multipart/form-data">
	<fieldset><legend>Identifiants</legend>
	<label for="pseudo">* Pseudo :</label>  <input name="pseudo" type="text" id="pseudo" /> (le pseudo doit contenir entre 3 et 15 caractères)<br />
	<label for="password">* Mot de Passe :</label><input type="password" name="password" id="password" /><br />
	<label for="confirm">* Confirmer le mot de passe :</label><input type="password" name="confirm" id="confirm" /><br />
	<label for="email">* Votre adresse Mail :</label><input type="text" name="email" id="email" /><br />
	</fieldset>
	<p>Les champs précédés d un * sont obligatoires</p>
	<p><input type="submit" value="S\'inscrire" /></p></form>
</body>
</html>