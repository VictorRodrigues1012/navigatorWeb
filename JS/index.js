const homeBtn = document.getElementById("home-el");
const contactBtn = document.getElementById("contact-el");
const aboutBtn = document.getElementById("about-el");

homeBtn.addEventListener("click", (e) => {
    //e.preventDefault();

    window.open('https://www.youtube.com/channel/UC0MOYKdx9AqiuLgeQjZZOYA', '_blank');
})

contactBtn.addEventListener("click", (e) => {
    //e.preventDefault();

    window.open('https://www.youtube.com/channel/UCPKELCXyIOso7cNUuf7iAvg', '_blank');
})

aboutBtn.addEventListener("click", (e) => {
    //e.preventDefault();

    window.open('https://www.youtube.com/channel/UCjNks6AywIFkBNgKm81qVDw', '_blank');
})