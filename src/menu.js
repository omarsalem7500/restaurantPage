const menu = (() =>{
    const content = document.querySelector('#content');
    const menu = document.createElement("div");
    menu.classList.add("menu"); 

    function createItem(name , description){
        const menuItem = doucment.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = name; 

        const itemDesc = document.createElement("p");
        itemDesc.textContent = description; 

        const itemImage = document.createElement("img");
        // foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
        // foodImage.alt = `${name}`;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemImage);

        return menuItem; 
    }

    menu.appendChild(
    createItem(
    "Smoked Brisket", 
    "12 oz of succulent brisket served with our natural BBQ sauce"));

    menu.appendChild(
        createItem(
        "Half A Rack Beef Back Ribs", 
        "5 hours slow smoked over maple wood then grilled with our signature BBQ sauce"));

    menu.appendChild(
        createItem(
        "Smoked Pulled Beef", 
         "12 oz of tender pulled beef served with our BBQ sauce"));

        content.appendChild(menu);

    
    return {
        createItem
    };


        
})();

export default menu;