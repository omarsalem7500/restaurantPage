const home = (() => {
    function render(){
        const content = document.querySelector('#content');
        const about = document.createElement("div");
        about.classList.add("about");
        const aboutText = document.createElement('h1');
        
        const p1 = doucment.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.textContent = "Real Food for Real Satisfaction"

        p2.textContent = " NO BS Food Without Modern Processed Ingredients ";

        p3.textContent = "Prime Cuts of Grass-Fed Red Meat cooked in Beef Tallow ";

        aboutText.appendChild(p1);
        aboutText.appendChild(p2);
        aboutText.appendChild(p3); 

        about.appendChild(aboutText);
        content.appendChild(about);

        



    }
    return {
        render
    };

})(); 

export default home;