let photos = ["IMG/x1.png", "IMG/x2.png", "IMG/x4.png"];
let buttons = document.querySelectorAll(".Photo");
let mainphoto = document.querySelector(".MainPhoto");

let ClickHandler = function (but, photo){
    but.addEventListener('click', function() {
        mainphoto.src =photo;
        console.log("click");
    });
}

for (let i = 0; i < buttons.length; i++) {
    ClickHandler(buttons[i], photos[i]);
}

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};
