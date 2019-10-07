var shifumi = {
    pierre: "pierre",
    feuille: "feuille",
    ciseaux: "ciseaux",
    result: null,
    WinOrLose: null,

    coupPierre: function(){
        shifumi.adversaire.coupHasard();
        if (this.result == this.pierre){
            return "Egalité !";
        } else if  (this.result == this.feuille){
            shifumi.WinOrLose = "lose";
            return "Perdu !" + 
            shifumi.coreFunctions.score();
        } else if(this.result == this.ciseaux){
            shifumi.WinOrLose = "win";
            return "Gagné !" + shifumi.coreFunctions.score();
        }else {
            return "erreur";
        }
        
    },

    coupFeuille: function(){
        shifumi.adversaire.coupHasard();
        console.log(this.result);
        if (this.result == this.pierre){
            shifumi.WinOrLose = "win";
            return "Gagné !" + shifumi.coreFunctions.score();
        } else if  (this.result == this.feuille){
            return "Egalité !";
        } else if(this.result == this.ciseaux){
            shifumi.WinOrLose = "lose";
            return "Perdu !" + 
            shifumi.coreFunctions.score();
        }else {
            return "erreur";
        }
    },

    coupCiseaux: function(){
        shifumi.adversaire.coupHasard();
        console.log(this.result);

        if (this.result == this.pierre){
            shifumi.WinOrLose = "lose";
            return "Perdu !" + 
            shifumi.coreFunctions.score();
        } else if  (this.result == this.feuille){
            shifumi.WinOrLose = "win";
            return "Gagné !" + shifumi.coreFunctions.score();
        } else if(this.result == this.ciseaux){
            return "Egalité !";
        }else {
            return "erreur";
        }
    },

    adversaire: {

        coupHasard: function(){
            var nb = Math.floor(Math.random() * Math.floor(3));
            console.log(nb);
            if (nb == 0){
                shifumi.result = "pierre"
                return shifumi.pierre;
            }else if (nb == 1){
                shifumi.result = "feuille"
                return shifumi.feuille;
            }else if (nb == 2){
                shifumi.result = "ciseaux"
                return shifumi.ciseaux;
            }else {
                return "erreur";
            }
        }
    },

    coreFunctions: {
        start: function(){
            var start = document.getElementById('left');
            start.innerHTML = '<input type="submit" value ="pierre" name="pierre" onclick="jouer(name)"> <input type="submit" value="feuille" name="feuille" onclick="jouer(name)"><input type="submit" value="ciseaux" name="ciseaux" onclick="jouer(name)"><div id="resultat"></div>'
        },
        
        pause:{

        },

        reset: function(){
            
            var load = document.getElementById('left');
            load.innerHTML = "";
        },
    
        score: function(){
            if (shifumi.WinOrLose == "lose"){
                shifumi.joueur.adversaire.score++; 
            }else if (shifumi.WinOrLose == "win"){
                shifumi.joueur.ourGamer.score++;
            }else {
                return "erreur";
            }
        },
    
    },

    joueur: {
        ourGamer: {
            score: 0,
        },

        adversaire: {
            score: 0,
        }
    }
    
};


function jouer(resultat){
    if (resultat == "pierre"){
        var match = shifumi.coupPierre(); // problème à résoudre !!! Eviter le undefined !
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + shifumi.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + shifumi.joueur.ourGamer.score + " et le score de l'adversaire est de " + shifumi.joueur.adversaire.score;
    }else if (resultat == "feuille"){
        var match = shifumi.coupFeuille();
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + shifumi.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + shifumi.joueur.ourGamer.score + " et le score de l'adversaire est de " + shifumi.joueur.adversaire.score;
    }else if (resultat == "ciseaux"){
        var match = shifumi.coupCiseaux();
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + shifumi.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + shifumi.joueur.ourGamer.score + " et le score de l'adversaire est de " + shifumi.joueur.adversaire.score;
    }else {
        return "erreur";
    }

};