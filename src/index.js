import home from './home';
 import createMenu from './menu';
import contact from './contact';


    
    function createHeader(){
     
        const header = document.createElement("header");
        header.classList.add("header");
       

        const restaurantName = document.createElement("h1");
        restaurantName.textContent = "On the Grill";
        restaurantName.classList.add("restaurant-name");
        header.appendChild(restaurantName);
        header.appendChild(createNav());
       

        return header;


    }

    function createNav(){
      const nav = document.createElement("nav");

      const homeButton = document.createElement("button");
      homeButton.classList.add("button-nav");
      homeButton.textContent = "Home";
      homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        home.render();
      });

      const menuButton = document.createElement("button");
      menuButton.classList.add("button-nav");
      menuButton.textContent = "Menu";
      menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        createMenu();
      });

      const contactButton = document.createElement("button");
      contactButton.classList.add("button-nav");
      contactButton.textContent = "Contact";
      contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        
        contact.createContact();
      });

      nav.appendChild(homeButton);
      nav.appendChild(menuButton);
      nav.appendChild(contactButton);

      return nav;

        }

        function setActiveButton(button) {
          const buttons = document.querySelectorAll(".button-nav");
        
          buttons.forEach((button) => {
            if (button !== this) {
              button.classList.remove("active");
            }
          });
        
          button.classList.add("active");
        }

    function createFooter(){
      
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const footerText = document.createElement('p');

        
        footerText.textContent = `Copyright © ${new Date().getFullYear()} omarsalem7500`;
      
        const githubLink = document.createElement("a");
        githubLink.href = "https://github.com/omarsalem7500";
      
       
        footer.appendChild(footerText);
        footer.appendChild(githubLink);
        
      
        return footer;

    }


    function createMain() {
      const main = document.createElement("main");
      main.classList.add("main");
      main.setAttribute("id", "main");
      return main;
    }
    

    function intializeWebsite(){
      const content = document.getElementById("content");

      content.appendChild(createHeader());
      
      
      content.appendChild(createMain());
      setActiveButton(document.querySelector(".button-nav"));
      home.render();
      content.appendChild(createFooter());
      
    }

    intializeWebsite();

  
      
       
    

    




