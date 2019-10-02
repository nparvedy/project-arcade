var jeu = {
    pierre: "pierre",
    feuille: "feuille",
    ciseaux: "ciseaux",
    result: null,
    WinOrLose: null,

    coupPierre: function(){
        jeu.adversaire.coupHasard();
        if (this.result == this.pierre){
            return "Egalité !";
        } else if  (this.result == this.feuille){
            jeu.WinOrLose = "lose";
            return "Perdu !" + 
            jeu.score();
        } else if(this.result == this.ciseaux){
            jeu.WinOrLose = "win";
            return "Gagné !" + jeu.score();
        }else {
            return "erreur";
        }
        
    },

    coupFeuille: function(){
        jeu.adversaire.coupHasard();
        console.log(this.result);
        if (this.result == this.pierre){
            jeu.WinOrLose = "win";
            return "Gagné !" + jeu.score();
        } else if  (this.result == this.feuille){
            return "Egalité !";
        } else if(this.result == this.ciseaux){
            jeu.WinOrLose = "lose";
            return "Perdu !" + 
            jeu.score();
        }else {
            return "erreur";
        }
    },

    coupCiseaux: function(){
        jeu.adversaire.coupHasard();
        console.log(this.result);

        if (this.result == this.pierre){
            jeu.WinOrLose = "lose";
            return "Perdu !" + 
            jeu.score();
        } else if  (this.result == this.feuille){
            jeu.WinOrLose = "win";
            return "Gagné !" + jeu.score();
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
                jeu.result = "pierre"
                return jeu.pierre;
            }else if (nb == 1){
                jeu.result = "feuille"
                return jeu.feuille;
            }else if (nb == 2){
                jeu.result = "ciseaux"
                return jeu.ciseaux;
            }else {
                return "erreur";
            }
        }
    },

    load: function(){
        var load = document.getElementById('left');
        load.innerHTML = '<input type="submit" value ="pierre" name="pierre" onclick="jouer(name)"> <input type="submit" value="feuille" name="feuille" onclick="jouer(name)"><input type="submit" value="ciseaux" name="ciseaux" onclick="jouer(name)"><div id="resultat"></div>'
    },

    reset: function(){
        
        var load = document.getElementById('left');
        load.innerHTML = "";
    },

    score: function(){
        if (jeu.WinOrLose == "lose"){
            jeu.joueur.adversaire.score++; 
        }else if (jeu.WinOrLose == "win"){
            jeu.joueur.ourGamer.score++;
        }else {
            return "erreur";
        }
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
        var match = jeu.coupPierre(); // problème à résoudre !!! Eviter le undefined !
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + jeu.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + jeu.joueur.ourGamer.score + " et le score de l'adversaire est de " + jeu.joueur.adversaire.score;
    }else if (resultat == "feuille"){
        var match = jeu.coupFeuille();
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + jeu.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + jeu.joueur.ourGamer.score + " et le score de l'adversaire est de " + jeu.joueur.adversaire.score;
    }else if (resultat == "ciseaux"){
        var match = jeu.coupCiseaux();
        var value = document.getElementById('resultat');
        value.innerHTML = "Le joueur à jouer " + resultat + " et son adversaire à jouer " + jeu.result + " et il a " + match + "<br /> Le score du joueur est maintenant de " + jeu.joueur.ourGamer.score + " et le score de l'adversaire est de " + jeu.joueur.adversaire.score;
    }else {
        return "erreur";
    }

};
