window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 300);
});
   const typing = document.getElementById("typing");

const words = [

    "Data Analyst",
    "Power BI Developer",
    "Python Programmer",
    "SEO Executive",
    "Fast Learner",

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const reveals = document.querySelectorAll(".glass,.card,.project-card,.title");

function revealAnimation() {
    const windowHeight = window.innerHeight;

    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

reveals.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "1s";
});

window.addEventListener("scroll", revealAnimation);
revealAnimation();

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 80) {
        header.style.background = "rgba(5,8,22,.9)";
        header.style.boxShadow = "0 0 20px rgba(0,212,255,.25)";
    } else {
        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";
    }
});
function updateDateTime() {

    const now = new Date();

    const days = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
    ];

    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        `${day}<br>${date} ${month} ${year}<br>${time}`;
}

function updateDateTime() {

    const now = new Date();

    const days = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
    ];

    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        `${day}<br>${date} ${month} ${year}<br>${time}`;
}

setInterval(updateDateTime,1000);
updateDateTime();


// Website Open Timer
let seconds = 0;

function updateTimer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerHTML =
        String(hrs).padStart(2,'0') + ":" +
        String(mins).padStart(2,'0') + ":" +
        String(secs).padStart(2,'0');
}

setInterval(updateTimer, 1000);