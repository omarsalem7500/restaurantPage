const contact = (() => {

    function createContact(){
    const content = document.querySelector('#content');
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 222 333 444'

    const address = doucment.createElement('p');
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA '

    // const restaurantLocation = document.createElement('img')
    // restaurantLocation.src = 'images/restaurant-location.png'
    // restaurantLocation.alt = 'Mozzafiato restaurant location'

    const hours = document.createElement('div');
    hours.textContent = "🕑 Mon - Sun 11:00 - 23:00"

  
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
    contact.appendChild(hours);

    content.appendChild('contact');
    }

    return {
        createContact
    };
  



    


})();