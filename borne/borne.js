var Borne = {
    /**
     * contient les informations de la borne 
     */

     data : {
         gameName : "",
         running : false,
         /**
          * Représente le temps passé de la borne en train de jouer
          */
         timer : 0,
     },

     /**
      * Les informations du player 
      */
     playerInfos : {
         /**
          * Le pseudo du joueur
          */

          pseudo : "",
          /**
           * Permet de savoir si l'utilisateur
           * est connecté à la borne
           * L'orsqu'il joue
           */

           guest : false,
     },

     game : null,

     /**
      * Fonctions liée à l'interaction 
      * avec le jeu
      */

      gameFunctions : {
          /**
           * lance le timer de la borne
           * (le temps passé à jouer)
           */

           startTimer : function(){
               /**
                * Vous devez mettre à jouer régulièrement
                * le timer du log du serveur pour le user en cours
                */
           },

           insertGame : function(){
               Borne.game = newGame;
               Borne.game.init(Borne.coreFunctions, Borne.playerInfos);
           }
      },

      /** 
       * les fonctions liée à la routine de la borne
       */

       coreFunctions : {
           interfaceInfos : {
               gameFrameId : "gameFrameId",
           },

           /**
            * la fonction permet d'envoyer
            * le score pushé par le jeu
            */

            saveScore : function(newScore){

            },

            /**
             * Affiche une modale dans la borne
             * Le message provient direction du jeu
             */

             showMessage: function(message){
                 Borne.devFunctions.writeLog(`[showMessage()]${message}`);
             }
       },

       /**
        * Les éléments UI
        */

        interface : {
            startButton : document.getElementById('playBtn'),
            pauseButton : document.getElementById('pauseBtn'),
            resetButton : document.getElementById('resetBtn'),
            infoTimer : document.getElementById('inforTime'),
            infoLogs : document.getElementById('infoLogs'),
            infoSoft : document.getElementById('infoSoft'),
            gameFrame : document.getElementById('gameFrame')[0],
            scriptGame : document.getElementById('scriptGame'),
        },

        init : function(){
            this.devFunctions.writeLog('[init] Try init borne devkit'),
            borne.devFunctions.writeLog(`[init] Game frame dimensions [${Borne.interface.gameFrame.offsetHeight};${Borne.interface.gameFrame.offsetWidth}]`);
            if (!Borne.interface.scriptGame || !Borne.interface.scriptGame.getAttribute('name')){
                Borne.devFunctions.writeLog(`[init] fail load game ! [CRASH : Script not loaded/found]`);
                return;
            }
            Borne.game = window[Borne.data.gameName];
            Borne.gameFunctions.insertGame(Borne.game);
            this.devFunctions.drawSoftLog();
            window.onresize
        }
}