var component = function(){
    var container = document.getElementById('content');
    
    var headline = document.createElement('h1');
    headline.innerText = "Wilson's Diner";

    var image = document.createElement('img');
    image.src = '../img/Wilsons_diner.jpg'

    var desc = document.createElement('p');
    desc.innerText = `This local family owned restaurant is worth your time visiting.
    Owned and operated by a long time local chef that takes pride in
    the food we serve to our customers.
    
    We locally source our produce and meat, and serve it with a friendly smile.

    Renowned for our annual Meat Fest in April, its a celebration of life's greatest things, 
    good food and loved ones around a table.
`

    container.appendChild(headline);
    container.appendChild(image);
    container.appendChild(desc);

    return container;
}

export { component };