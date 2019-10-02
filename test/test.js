var test = {
    result : null,
    association : {
        calcul : function(a,b){
            var resultat = a + b;
        
            this.result = resultat;
        },
        afficherResultat : function(){
            console.log(this.result);
        }
        

    },

    afficherResultat : function(resultat){
    }
};
var result = test.association.calcul(1,2);
test.association.afficherResultat();
console.log(test.result);