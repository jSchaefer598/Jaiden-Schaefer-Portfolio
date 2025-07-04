let darkMode = document.querySelector(".dark-mode");
let lightMode = document.querySelector(".light-mode");

let header = document.querySelector(".header");
let headerText = document.querySelector("h1");
let header2 = document.querySelector("h2");
let content = document.querySelector(".content");
let paragraph = document.querySelector("p");
let mailText = document.querySelector(".mail");
let numberText = document.querySelector(".number");
let gitText = document.querySelector(".git");
let linkinText = document.querySelector(".linkin");

let contact = document.querySelector("#contact");
let resume = document.querySelector("#resume");
let projects = document.querySelector("#projects");
let aboutMe = document.querySelector("#about-me");
let email = document.querySelector("#email");
let call = document.querySelector("#call");
let github = document.querySelector("#github");
let linkedin = document.querySelector("#linkedin");

let emailText = document.querySelector("#mail");
let callText = document.querySelector("#phone");
let githubText = document.querySelector("#hub");
let linkedinText = document.querySelector("#linked");

let resumeImg = document.querySelector(".resume");

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
    header2.style.color = "#d5f1ef";
    content.style.backgroundColor = "#18455d";
    content.style.color = "#d5f1ef";
    contact.src = "images/navbarImages/phone.png";
    resume.src = "images/navbarImages/resume.png";
    projects.src = "images/navbarImages/projects.png";
    aboutMe.src = "images/navbarImages/aboutMe.png";
    paragraph.style.color = "#d5f1ef";
} else {
    console.log("set css to light mode");
    // javascript for light mode CSS
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    header.style.backgroundColor = "#d5f1ef";
    headerText.style.color = "#18455d";
    contact.src = "images/navbarImages/phoneDark.png";
    resume.src = "images/navbarImages/resumeDark.png";
    projects.src = "images/navbarImages/projectsDark.png";
    aboutMe.src = "images/navbarImages/aboutMeDark.png";
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
    contact.src = "images/navbarImages/phone.png";
    resume.src = "images/navbarImages/resume.png";
    projects.src = "images/navbarImages/projects.png";
    aboutMe.src = "images/navbarImages/aboutMe.png";
    header2.style.color = "#d5f1ef";
    content.style.backgroundColor = "#18455d";
    content.style.color = "#d5f1ef";
    paragraph.style.color = "#d5f1ef";
    email.src = "images/contactImages/emailDark.png";
    call.src = "images/contactImages/callDark.png";
    github.src = "images/contactImages/githubDark.png";
    linkedin.src = "images/contactImages/linkedinDark.png";
    mailText.style.color = "#d5f1ef";
    numberText.style.color = "#d5f1ef";
    gitText.style.color = "#d5f1ef";
    linkinText.style.color = "#d5f1ef";
});

lightMode.addEventListener("click", function(){
    localStorage.setItem("isDarkModeEnabled", "false");

    darkMode.style.display = "block";
    lightMode.style.display = "none";
    header.style.backgroundColor = "#d5f1ef";
    headerText.style.color = "#18455d";
    contact.src = "images/navbarImages/phoneDark.png";
    resume.src = "images/navbarImages/resumeDark.png";
    projects.src = "images/navbarImages/projectsDark.png";
    aboutMe.src = "images/navbarImages/aboutMeDark.png";
    header2.style.color = "#18455d";
    content.style.backgroundColor = "#d5f1ef";
    content.style.color = "#18455d";
    paragraph.style.color = "#18455d";
    email.src = "images/contactImages/email.png";
    call.src = "images/contactImages/call.png";
    github.src = "images/contactImages/github.png";
    linkedin.src  = "images/contactImages/linkedin.png";
    mailText.style.color = "#18455d";
    numberText.style.color = "#18455d";
    gitText.style.color = "#18455d";
    linkinText.style.color = "#18455d";
});

resumeImg.addEventListener("click", function(){
    resumeImg.style.width = "45%";    
});
