// ==UserScript==
// @name        Huawei 5G CPE Pro 2 Mod
// @icon        https://i.imgur.com/OsLkmXp.png
// @license     GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// @updateURL   https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/main/Huawei-5G-CPE-Pro-2-Mod.user.js
// @downloadURL https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/main/Huawei-5G-CPE-Pro-2-Mod.user.js
// @include     *://192.168.*.1/*
// @version     1.7.1
// @author      iN4sser
// @namespace   iN4sser
// @grant       GM_addStyle
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @description This style is made to unlock some hidden features on the web page
// ==/UserScript==

// Styling/Unhiding Some Features 
GM_addStyle ( `
div#IDS_ethernet_dynamicip_manual_control_father,
 {
    display: block !important;
}
div#rightpagearea{
  float: right;
}
div#footer_copyright:after {
    content: " | Modded By iN4sser";
}
` );
