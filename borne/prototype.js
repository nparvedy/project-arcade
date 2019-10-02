/**
 * CECI EST UN SIMPLE EXEMPLE
 */

const Jeu = 
{
    name : "",
    descript : "",
    type : "",
    score : int ,
    connected : Boolean,
    rank : [],

    /**
     * Les fonctions appelé par la borne 
     */
    coreFunctions : {
        /**
         * La fonction qui démarre le jeu 
         */
        start : function() {

        },

        // function qui recupere le meilleure 
        dropSscore : function(){

        },

        // function qui envoie les meilleurs scores actuelles sous forme de tableau au jeux 
        bestScore : function(){

        },
        
        // fonction qui retourne a la borne en cas d'apel de la fontion --- exitGame --- 
        return : function(){

        },


    },
    /**
     * 
     */
    gameFunctions : {

        // fonctions qui charge map et autres elements du jeux 
        load : function(){

        },

        // fonction qui commence le jeux ou le reprend 
        play : function(){

        },

        // fonction qui quitte le jeu et reviens a la bornes en passant par la fonction --- return ---
        exitGame : function(){

        },

        // fonctions qui vas permettre de mettre le jeux en pause via ESC et avoir acces a 
        // --- play --- exitGame --- disconnected ---
        pause : function(){

        },

        // fonction qui vas envoyer le score de la fin de partie a la borne qui vas a son tour 
        // l'envoyer a la BDD 
        newScore : function(){

        },

        // fonction qui deconnecte et renvoie directement a l'ecran de conection 
        disconnected : function(){

        },


        


    }

};