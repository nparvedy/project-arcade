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
     * Les fonctions appelées par la borne 
     */
    coreFunctions : {
        /**
         * La fonction qui démarre le jeu 
         */
        start : function() {

        },

        // fonction qui recupere le meilleure 
        dropScore : function(){

        },

        // fonction qui envoie les meilleurs scores actuels sous forme de tableau de jeux 
        bestScore : function(){

        },
        
        // fonction qui retourne a la borne en cas d'appel de la fonction --- exitGame --- 
        return : function(){

        },


    },
    /**
     * 
     */
    gameFunctions : {

        // fonction qui charge map et autres elements du jeux 
        load : function(){

        },

        // fonction qui lance le jeu ou le reprend 
        play : function(){

        },

        // fonction qui quitte le jeu et revient a la borne en passant par la fonction --- return ---
        exitGame : function(){

        },

        // fonction qui va permettre de mettre le jeu en pause via ESC et avoir acces a 
        // --- play --- exitGame --- disconnected ---
        pause : function(){

        },

        // fonction qui va envoyer le score de la fin de partie a la borne qui va a son tour 
        // l'envoyer a la BDD 
        newScore : function(){

        },

        // fonction qui deconnecte et renvoie directement a l'ecran de connection 
        disconnected : function(){

        },


        


    }

};