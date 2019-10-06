Borne = {
    interface : {
        startButton : document.getElementById('playBtn'),
        resetButton : document.getElementById('resetBtn')
    },

    init: function(){
        Borne.interface.startButton.addEventListener("click", shifumi.load);
        Borne.interface.resetButton.addEventListener("click", shifumi.reset);
    }
};

Borne.init();