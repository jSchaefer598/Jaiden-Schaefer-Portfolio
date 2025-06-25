let darkMode = document.querySelector(".dark-mode");
let lightMode = document.querySelector(".light-mode");

let header = document.querySelector(".header");
let headerText = document.querySelector("h1");
let header2 = document.querySelector("h2");
let content = document.querySelector(".content");
let paragraph = document.querySelector("p");

let contact = document.querySelector("#contact");
let resume = document.querySelector("#resume");
let projects = document.querySelector("#projects");
let aboutMe = document.querySelector("#about-me");
let email = document.querySelector("#email");
let call = document.querySelector("#call");
let github = document.querySelector("#github");


// Check in localstorage is dark mode is enabled
let isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled");
console.log(isDarkModeEnabled);


if(isDarkModeEnabled === "true") {
    console.log("set css to dark mode");
    // dark mode CSS
    darkMode.style.display = "none";
    lightMode.style.display = "block";
    header.style.backgroundColor = "#18455d";
    headerText.style.color = "#d5f1ef";
    contact.src = "phone.png";
    resume.src = "resume.png";
    projects.src = "projects.png";
    aboutMe.src = "aboutMe.png";
    header2.style.color = "#d5f1ef";
    content.style.backgroundColor = "#18455d";
    content.style.color= "#d5f1ef";
    paragraph.style.color = "#d5f1ef";
} else {
    console.log("set css to light mode");
    // javascript for light mode CSS
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    header.style.backgroundColor = "#d5f1ef";
    headerText.style.color = "#18455d";
    contact.src = "phoneDark.png";
    resume.src = "resumeDark.png";
    projects.src = "projectsDark.png";
    aboutMe.src = "aboutMeDark.png";
    header2.style.color = "#18455d";
    content.style.backgroundColor = "#d5f1ef";
    content.style.color = "#18455d";
    paragraph.style.color = "#18455d";
}

darkMode.addEventListener("click", function(){
    localStorage.setItem("isDarkModeEnabled", "true");
    
    darkMode.style.display = "none";
    lightMode.style.display = "block";
    header.style.backgroundColor = "#18455d";
    headerText.style.color = "#d5f1ef";
    contact.src = "phone.png";
    resume.src = "resume.png";
    projects.src = "projects.png";
    aboutMe.src = "aboutMe.png";
    header2.style.color = "#d5f1ef";
    content.style.backgroundColor = "#18455d";
    content.style.color = "#d5f1ef";
    paragraph.style.color = "#d5f1ef";
    email.src = "emailDark.png";
    call.src = "callDark.png";
    github.src = "githubDark.png";
});

lightMode.addEventListener("click", function(){
    localStorage.setItem("isDarkModeEnabled", "false");

    darkMode.style.display = "block";
    lightMode.style.display = "none";
    header.style.backgroundColor = "#d5f1ef";
    headerText.style.color = "#18455d";
    contact.src = "phoneDark.png";
    resume.src = "resumeDark.png";
    projects.src = "projectsDark.png";
    aboutMe.src = "aboutMeDark.png";
    header2.style.color = "#18455d";
    content.style.backgroundColor = "#d5f1ef";
    content.style.color = "#18455d";
    paragraph.style.color = "#18455d";
    email.src = "email.png";
    call.src = "call.png";
    github.src = "github.png";
});


