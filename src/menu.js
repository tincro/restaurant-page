var menu = function() {
    var menuData = document.createElement('div');
    menuData.id = 'menu-data';

    var headline = document.createElement('h2')
    headline.id = 'menu-title';
    headline.className = 'nav-tab';
    headline.innerText = "Here is the menu";

    menuData.appendChild(headline);

    return menuData;
}

export { menu };