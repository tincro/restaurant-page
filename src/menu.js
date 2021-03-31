var menu = function() {
    var menuData = document.createElement('div');
    menuData.id = 'menu-data';

    var headline = document.createElement('h2')
    headline.id = 'menu-title';
    headline.className = 'nav-tab';
    headline.innerText = "Enjoy our locally sourced menu";
    
    menuData.appendChild(headline);

    var menuItems = {
        "Starters": {
            "Calamari": 11,
            "Flatbread": 9,
            "Nachos": 8,
            "Spinach Dip": 8
        },
        "Burgers": {
            "American": 10,
            "BBQ Bourbon": 15,
            "Bison": 13,
            "Mushroom Turkey": 12,
            "Ostrich": 12
        },
        "Entrees": {
            "Baby Back Ribs": 13,
            "BBQ Chicken": 10,
            "Chicken Tenders": 8,
            "Po'boy": 7
        },
        "Steaks": {
            "NY Strip": 28,
            "Ribeye": 22,
            "Surf N' Turf": 35
        },
        "Salads": {
            "Blue Cobb": 12,
            "Ceasar": 11,
            "House": 10
        },
        "Seafood": {
            "Scallops": 12,
            "Shrimp N' Grits": 8,
            "Shrimp Creole": 9,
            "Rainbow Trout": 12,
        },
        "Sides": {
            "Brussel Sprouts": 5,
            "Cole Slaw": 3,
            "Fries": 4,
            "Mac N' Cheese": 4,
            "Mashed Potato": 4,
            "Red Beans and Rice": 3
        },
        "Drinks": {
            "Beer": 6,
            "Tea": 2,
            "Lemonade": 3,
            "Soft Drinks": 2
        }
    };

    const items = Object.entries(menuItems);
    const foodGroup = document.createElement('div');
    foodGroup.id = 'food-group-container'
    
    // Food classifications
    for (const [foodType, lineItem] of items){
        let foodSection = document.createElement('div');
        foodSection.className = 'food-group';

        let foodTitle = document.createElement('h3');
        foodTitle.id = `${foodType.toLowerCase()}-title`;
        foodTitle.className = 'food-title';
        foodTitle.innerText = foodType;

        foodSection.appendChild(foodTitle);
        
        let foodList = document.createElement('ul');

        const foods = Object.entries(lineItem);
        
        // Food name and price
        for (const [food, price] of foods){
            let foodItem = document.createElement('li');
            foodItem.innerHTML = `<span>${food}</span> <span>$${price}</span>`;

            foodList.appendChild(foodItem);
        }

        foodSection.appendChild(foodList);
        foodGroup.appendChild(foodSection);
    }
    menuData.appendChild(foodGroup);

    return menuData;
}

export { menu };