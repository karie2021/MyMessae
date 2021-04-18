'use strict'

function showMessage() {
        let target = document.getElementById('message');
        target.innerHTML = '皆さん、こんにちは';
        setTimeout(showMessage2, 5000);
    } 

    function showMessage2() {
        let target = document.getElementById('message');
        target.innerHTML  = '皆さんのおかげでこのプログラムを作ることができました';
        setTimeout(showMessage3, 9000);
    }

    function showMessage3() {
        let target = document.getElementById('message');
        target.innerHTML = 'これからも仲良くしていただけると嬉しいです。よろしくお願いします！';
    }


