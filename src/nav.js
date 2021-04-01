var nav = function() {
    var navTabs = ["Menu", "Contact"];

    var container = document.createElement('div');
    container.id = 'nav-content'

    var nav = document.createElement('nav');
    nav.id = 'tab-nav';

    var ul = document.createElement('ul');

    navTabs.forEach( tabText => {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.innerText = tabText;
        
        var lower = tabText.toLowerCase();
        a.id = lower;
        a.href = '#' + lower;

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    container.appendChild(nav);

    return container;
}

export { nav };