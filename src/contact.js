const contact = (() => {

    function createContact(){
    const content = document.querySelector('#content');
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 222 333 444'

    const address = document.createElement('p');
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA '

     const restaurantLocation = document.createElement('img')
     restaurantLocation.src = "../dist/images/maps.png"
     restaurantLocation.alt = ' restaurant location'
     restaurantLocation.classList.add("map");

    const hours = document.createElement('div');
    hours.textContent = "🕑 Mon - Sun 11:00 - 23:00"

  
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
    contact.appendChild(hours);

    const main = document.getElementById("main");


    main.textContent = '';   
    main.appendChild(contact);
    }

    return {
        createContact
    };
  



    


})();

export default contact;