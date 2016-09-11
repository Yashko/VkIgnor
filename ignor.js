// ==UserScript==
// @name         Vk Mute
// @version      0.2
// @author       Yashko
// @include      http*://vk.com/*
// ==/UserScript==

var MUTE = ['144105306'];

(function() {
    'use strict';
    var chatik = document.getElementById('chat_onl_wrap');
    chatik.parentNode.removeChild(chatik);
    ignor();
    document.body.addEventListener('DOMSubtreeModified', ignor, false);
})();

function ignor() {
    if (window.location.pathname != '/im') { return; }
    var messages = document.getElementsByClassName('im-mess-stack');
    for (var i = 0; i < messages.length; i++) {
        var el = messages[i];
        if (MUTE.indexOf(el.getAttribute('data-peer')) > -1) {
            el.parentNode.removeChild( el );
        }
    }
}
