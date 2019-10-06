/**
 * CECI EST UN SIMPLE EXEMPLE
 */

var devKitGame = 
{
    /**
     * La function init est appelé pour initialiser le jeu 
     * Les functions de la bornes (par exemple saveScore(), showMessage()) sont passées en paramètres => elles sont stockées dans Jeu.borneFunctions
     * Les infos du player sont passés en paramètres => ils sont stockés dans Jeu.playerInfos
     * @param {*} initBorneFunctions 
     * @param {*} initPlayerInfos 
     */
    init : function(initBorneFunctions, initPlayerInfos){
        this.borneFunctions = initBorneFunctions;
        this.playerInfos = initPlayerInfos;
    },

    /**
     * Le type sert à définir la boucle du jeux 
     * Sa valeur est un string soit "time" soit "free"
     */
    type : "",

    /**
     * La description
     */
    description : "",

    /**
     * Données de fonctionnements du jeu
     */
    data : 
    {
        /**
         * Le state est vraie quand le jeu fonctionne
         * Le state est faux quand le jeu est arrété ou en pause
         */
        state : false,

        /**
         * Score en cours
         */
        score : 0,

        init : false,

    }, 

    /**
     * Les informations du player
     */
    playerInfos : 
    {
        /**
         * Le pseudo du player
         */
        pseudo : "",
        /**
         * Permet de savoir si l'utilisateur 
         * est connecté à la borne lorsqu'il joue
         */
        guest : false,
    },



    /**
     * Les fonctions appelé par la borne 
     */
    coreFunctions : {
        /**
         * La fonction qui démarre le jeu 
         */
        start : function() {
            if (!devKitGame.data.init)
            {
                const initInterfaceState = devKitGame.gameFunctions.graphFunctions.initInterface();
                if (!initInterfaceState)
                {
                    return initInterfaceState;
                }
                const initCanvasContext = devKitGame.gameFunctions.graphFunctions.initCanvasContext();
                if (!initCanvasContext)
                {
                    return initCanvasContext;
                }
                devKitGame.data.init    = true;
            }else{
                devKitGame.gameFunctions.graphFunctions.cleanFrame();
                devKitGame.gameFunctions.graphFunctions.drawText("Idle.", 10, 10);
            }
            devKitGame.data.state   = true;
            return true;
        },
        /**
         * Mettre en pause le jeu
         */
        pause : function()
        {
            if (!devKitGame.data.init)
            {
                return -1;
            }
            if (!devKitGame.data.state)
            {
                return -2;
            }
            const canvasH = devKitGame.gameFunctions.interface.borneNode.offsetHeight;
            const canvasW = devKitGame.gameFunctions.interface.borneNode.offsetWidth;
            devKitGame.data.state = false;
            devKitGame.gameFunctions.graphFunctions.drawText("Pause", 10, 100);
            return true;
        },
        /**
         * Remettre à zéro le jeu
         */
        reset : function()
        {
            devKitGame.data.state   = false;
            devKitGame.data.init    = false;
            return devKitGame.coreFunctions.start();
        },
    },

    /**
     * Les fonctions de la borne que peut 
     * appeler le jeu
     */
    borneFunctions : {},

    /**
     * Les fonctions propres au jeu
     */
    gameFunctions : 
    {
        interface : 
        {
            borneNode       : null,
            mainNode        : null,
            canvasContext   : null,
        },
        graphFunctions : 
        {
            initInterface : function()
            {
                let gameFrameId = devKitGame.borneFunctions.interfaceInfos.gameFrameId;
                if (!gameFrameId.length)
                {
                    return -1;
                }
                let gameFrameElement = document.getElementById(gameFrameId);
                if (!gameFrameElement)
                {
                    return -2;
                }
                devKitGame.gameFunctions.interface.borneNode = gameFrameElement;
                return true;
            },
            initCanvasContext : function()
            {
                devKitGame.gameFunctions.interface.borneNode.innerHTML = "";
                const innerDiv = document.createElement('canvas');
                if (!innerDiv)
                {
                    return -3;
                }
                innerDiv.style.height = "100%";
                innerDiv.style.width = "100%";
                innerDiv.id = 'mainNode';
                devKitGame.gameFunctions.interface.mainNode = innerDiv; 
                
                const ctx = innerDiv.getContext("2d");
                if (!ctx)
                {
                    return -4;
                }
                devKitGame.gameFunctions.interface.canvasContext = ctx;
                ctx.fillStyle = "blue";
                ctx.fillRect(0, 0, innerDiv.width, innerDiv.height);

                devKitGame.gameFunctions.interface.borneNode.appendChild(innerDiv);
                devKitGame.gameFunctions.graphFunctions.drawText("Game Init done!");
                return true;
            },
            drawText : function(msg, x = 10, y = 10)
            {
                if (!devKitGame.gameFunctions.interface.canvasContext)
                {
                    devKitGame.borneFunctions.showMessage("Canvas2DContext not found");
                    return false;
                }
                devKitGame.gameFunctions.interface.canvasContext.font = "30px Arial";
                devKitGame.gameFunctions.interface.canvasContext.fillStyle = "red";
                devKitGame.gameFunctions.interface.canvasContext.textBaseline = "top";
                devKitGame.gameFunctions.interface.canvasContext.fillText(msg, x, y);
                devKitGame.borneFunctions.showMessage(`Message ${msg} draw on ${y};${x}`);
                return true;
            },
            cleanFrame : function()
            {
                const tmpCtx        = devKitGame.gameFunctions.interface.canvasContext;
                const motherNode    = devKitGame.gameFunctions.interface.borneNode;
                tmpCtx.fillStyle = "blue";
                tmpCtx.fillRect(0, 0, motherNode.offsetWidth, motherNode.offsetHeight);
            },
        },  
    }

};