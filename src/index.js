import { content } from "./content.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";


document.onload = content();

function onTabChange(tab){
    var container = document.getElementById('nav-content');
    var nav = document.getElementById('tab-nav');
    
    while(container.lastChild != nav){
        container.removeChild(container.lastChild);
    };

    container.appendChild(tab());
    return container;
};

var menuData = document.getElementById('menu');
var contactData = document.getElementById('contact');

menuData.addEventListener("click", function(){ onTabChange(menu) });
contactData.addEventListener("click", function() { onTabChange(contact) });