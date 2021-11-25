var currentPlayer

function game(player) {
    if (player != currentPlayer) {
        if (document.getElementById('player') != null) {
            var el = document.getElementById('player');
            el.remove();
        }
        if (player == 'turbowarp') {
            //<iframe src="6.0.3/index.html" width="480" height="360" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>

            var ifrm = document.createElement('iframe');
            ifrm.setAttribute('src', 'turbowarp/index.html');
            ifrm.setAttribute('id', 'player');
            ifrm.setAttribute('width', '480');
            ifrm.setAttribute('height', '360');
            ifrm.setAttribute('allowtransparency', 'true');
            ifrm.setAttribute('frameborder', '0');
            ifrm.setAttribute('scrolling', 'no');
            ifrm.setAttribute('allowfullscreen', '');

            var element = document.getElementById('game');
            element.appendChild(ifrm);

        } else if (player == 'forkphorus') {
            var ifrm = document.createElement('iframe');
            ifrm.setAttribute('src', 'https://v6p9d9t4.ssl.hwcdn.net/html/3780906/index.html');
            ifrm.setAttribute('id', 'player');
            ifrm.setAttribute('width', '480');
            ifrm.setAttribute('height', '360');
            ifrm.setAttribute('allowtransparency', 'true');
            ifrm.setAttribute('frameborder', '0');
            ifrm.setAttribute('scrolling', 'no');
            ifrm.setAttribute('allowfullscreen', '');

            var element = document.getElementById('game');
            element.appendChild(ifrm);
        } else if (player == 'htmlifier') {
            var ifrm = document.createElement('iframe');
            ifrm.setAttribute('src', 'htmlifier 6.0.3/index.html');
            ifrm.setAttribute('id', 'player');
            ifrm.setAttribute('width', '480');
            ifrm.setAttribute('height', '360');
            ifrm.setAttribute('allowtransparency', 'true');
            ifrm.setAttribute('frameborder', '0');
            ifrm.setAttribute('scrolling', 'no');
            ifrm.setAttribute('allowfullscreen', '');

            var element = document.getElementById('game');
            element.appendChild(ifrm);
        }
        currentPlayer = player;
    };
};