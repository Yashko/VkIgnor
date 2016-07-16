// ==UserScript==
// @name         vk mute
// @version      0.1
// @author       Yashko
// @include      http*://vk.com/*
// @include      http*://new.vk.com/*
// ==/UserScript==

//скрывать сообщения от id1 и id2
var MUTE = ['1','2'];

(function() {
    'use strict';
    var chatik = document.getElementById('chat_onl_wrap');
    chatik.parentNode.removeChild(chatik);
    ignor();
    document.body.addEventListener('DOMSubtreeModified', ignor, false);
})();

function ignor() {
    if (window.location.pathname != '/im') { return; }
    var messages = document.getElementsByClassName('im_in');
    for (var i = 0; i < messages.length; i++) {
        var el = messages[i];
        if (MUTE.indexOf(el.getAttribute('data-from')) > -1) {
            el.parentNode.removeChild( el );
        }
    }
}