
  

    function createItem(name , description, img){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = name; 

        const itemDesc = document.createElement("p");
        itemDesc.textContent = description; 

        const itemImage = document.createElement("img");
        itemImage.src = img;
         itemImage.alt = name;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemImage);

        return menuItem; 
    }

    function createMenu(){
        const content = document.querySelector('#content');
        const menu = document.createElement("div");
        menu.classList.add("menu"); 
    
    
        menu.appendChild(
        createItem(
        "Smoked Brisket", 
        "12 oz of succulent brisket served with our natural BBQ sauce",
        "../dist/images/brisket.jpg"));
    
        menu.appendChild(
            createItem(
            "Half A Rack Beef Back Ribs", 
            "5 hours slow smoked over maple wood then grilled with our signature BBQ sauce",
            "../dist/images/pulled beef.jpg"));
    
        menu.appendChild(
            createItem(
            "Smoked Pulled Beef", 
             "12 oz of tender pulled beef served with our BBQ sauce",
             "../dist/images/ribs.jpg"));

             const main = document.getElementById("main");


             main.textContent = "";   
             main.appendChild(menu);
     
    }
    

    export default createMenu; 
    
    
   


        


