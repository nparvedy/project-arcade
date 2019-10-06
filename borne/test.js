/**
 * on créer l'objet jeu
 */
calculatrice = { 

    nombre : 1,
    addition : function(premierNombre){
      resultat = premierNombre + this.nombre;
      return resultat;
    },

    afficherResultat : function(){
        this.addition(1);
        return resultat;
    }
};

console.log(calculatrice.afficherResultat());


