(function() {
    let getIsRunning = document.currentScript.getAttribute('isRunning');
    if (getIsRunning === 'false' || !getIsRunning) {
        return;
    }

    document.body.onload = initPlugin;

    function initPlugin() {
        let newElement = document.createElement('div');
        newElement.innerHTML += '<button id="plugin-open-dialog" class="buttonTriangle"></button>'
            + '<div id="plugin-popup" class="w3-modal">'
                + '<div class="popup_body w3-modal-content w3-animate-zoom" style="padding:32px">'
                    + '<div class="w3-container w3-white w3-center">'
                        + '<p class="w3-wide">PLUGIN</p>'
                        + '<button type="button" id="plugin-close-dialog-and-console" class="w3-button w3-padding-large w3-red w3-margin">Accept</button>'
                        + '<button type="button" id="plugin-close-dialog" class="w3-button w3-padding-large w3-red w3-margin">Reject</button>'
                    + '</div>'
                + '</div>'
            + '</div>';
        document.body.appendChild(newElement);
        addStyles();
    }

    function addStyles () {
        let newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = 'src/styles.css';
        newLink.id = 'idward-styles';
        document.body.appendChild(newLink);
    }
})();
