// ==UserScript==
// @name        Huawei 5G CPE Pro 2 Mod
// @icon        https://i.imgur.com/OsLkmXp.png
// @license     GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// @updateURL   https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/main/Huawei-5G-CPE-Pro-2-Mod.user.js
// @downloadURL https://github.com/iN4sser/Huawei-5G-CPE-Pro-2-Mod/raw/main/Huawei-5G-CPE-Pro-2-Mod.user.js
// @include     *://192.168.*.1/*
// @version     1.4
// @author      iN4sser
// @namespace   iN4sser
// @grant       GM_addStyle
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @description This style is made to unlock some hidden features on the web page
// ==/UserScript==

// Styling/Unhiding Some Features 
GM_addStyle ( `
div#mobilesearch_LTE_band_select,
div#mobilesearch_btn_save_div,
#mobilesearch_input_support_5G_switch_operate,
div#mobilesearch_network_mode_5G,
div#mobilesearch_network_notes,
div#mobilesearch_input_support_3G_switch_operate,
div#mobilesearch_input_support_4G_switch_operate,
div#apn_list_input_dns_operate,
div#dhcp_dns,
div#mobilesearch_LTE_band_list_items,
div#dhcp_mask,
div#apn_connection_mode,
.eths-vlan.eth-sub-section,
.eths-static.eth-sub-section,
.eths-lan-only.eth-sub-section,
div#eths-manual-mac,
div#secondary_dns,
div#wanspeed,
div#dualntwk_ipv4,
div#dualntwk_ipv6,
div#dia_trace_maxhops_father,
div#led_switch_content,
div#ip_type,
div#antenna_page,
div#wifi_save_power_wrapper,
div#wifi_save_power,
div#wifiadv_atuoApti_div,
div#LAN_LAN_Ping,
div#statistics_daily_flow_switch,
div#wifiadv_2g_mode_div,
div#wifiadv_2g_maxassociate_div,
div#wifiadv_5g_mode_div,
div#wifiadv_5g_maxassociate_div {
    display: block !important;
}
div#footer_copyright:after {
    content: " | Modded By iN4sser";
}
` );
