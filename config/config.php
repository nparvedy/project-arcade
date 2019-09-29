<?php
/*
    $servername = "localhost";
    $username = "root";
    $password = "";
    
    try {
    
        $conn = new PDO("mysql:host=$servername", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    catch(PDOException $e)
        {
        echo $sql . "<br>" . $e->getMessage();
        }
    */
?>

<?php 
class BaseDeDonnees {
    
    private $servername;
    private $username;
    private $password;
    private $dbname;
    public $bdd;

    public function __construct($servername, $dbname, $username, $password){
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;

    }

    public function seConnecter(){
        try {
    
        $bdd = new PDO("mysql:host=$this->servername;dbname=$this->dbname;charset=utf8", "$this->username", "$this->password");
        // set the PDO error mode to exception
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->bdd = $bdd;
        }
    catch(PDOException $e)
        {
        echo $sql . "<br>" . $e->getMessage();
        }
    }
    
}
?>

