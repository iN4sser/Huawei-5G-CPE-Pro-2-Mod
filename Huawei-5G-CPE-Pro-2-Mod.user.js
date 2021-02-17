// ==UserScript==
// @name        Huawei 5G CPE Pro 2 Mod
// @license     GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// @updateURL   https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/master/Huawei-5G-CPE-Pro-2-Mod.user.js
// @downloadURL https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/master/Huawei-5G-CPE-Pro-2-Mod.user.js
// @namespace   iN4sser
// @include     *://192.168.*.1/*
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @description This script have been made based on "MiNOoOoON" Thread on Adslgate "https://www.adslgate.com/dsl/showthread.php?t=2611386"
// ==/UserScript==
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Mod!</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
   var list = $('#dhcp_dns').show();$('#apn_list_input_dns_operate').show();$('#mobilesearch_input_support_4G_switch_operate').show();$('#mobilesearch_network_mode_5G').show();$('#mobilesearch_LTE_band_select').show();$('#mobilesearch_LTE_band_list_items').show();$('#mobilesearch_input_support_5G_switch_operate').show();$('#dhcp_mask').show();$('#mobilesearch_input_support_5G_switch_operate').show();$('#mobilesearch_network_mode_5G').show();$('#mobilesearch_btn_save_div').show();
}

//--- Style our newly added elements using CSS.
GM_addStyle ( multilineStr ( function () {/*!
    #myButton {
      position: fixed;
      top: 2%;
      left: 28px;
      background: linear-gradient(90deg, #0c9 0, #09f);
      font-size: 1.09375vw;
      font-weight: 600;
      color: white;
      padding: 10px 20px;
      border-radius: 39.0625vw;
      border: none;
      text-shadow: 0.2px 0.2px 0.2px #000;
      z-index: 999;
    }
*/} ) );

function multilineStr (dummyFunc) {
    var str = dummyFunc.toString ();
    str     = str.replace (/^[^\/]+\/\*!?/, '') // Strip function () { /*!
            .replace (/\s*\*\/\s*\}\s*$/, '')   // Strip */ }
            .replace (/\/\/.+$/gm, '') // Double-slash comments wreck CSS. Strip them.
            ;
    return str;
}
