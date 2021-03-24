var content = function(){
    var container = document.getElementById('content');
    
    var headline = document.createElement('h1');
    headline.innerText = "Wilson's Diner";
    headline.id = 'store-title'

    var image = document.createElement('img');
    image.src = '../img/Wilsons_diner.jpg'
    image.id = 'store-img'
    
    var descArr = [
        "This local family owned restaurant is worth your time visiting.\
        Owned and operated by a long time local chef that takes pride in\
        the food we serve to our customers.",

        "We locally source our produce and meat, cook it with love, and serve with a friendly smile.",

        "Renowned for our annual Meat Fest in April, its a celebration of life's greatest things: \
        good food and loved ones around a table."   
    ];
    
    var textContainer = document.createElement('div')
    textContainer.id = 'store-history';

    descArr.forEach(p => {
        var desc = document.createElement('p');
        desc.innerText = p;
        textContainer.appendChild(desc);
    });

    container.appendChild(image);
    container.appendChild(headline);
    container.appendChild(textContainer);

    return container;
}

export { content };