document.addEventListener("DOMContentLoaded", () => {

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");


window.addEventListener('mousemove', (e) => {
  const postX = e.clientX;
  const postY = e.clientY;

  cursorDot.style.top = `${postY}px`;
  cursorDot.style.left = postX + 'px';

  if ( e.target.closest('#name')) {
    console.log('project');
    cursorOutline.style.opacity = 0;
  }
  else{
    cursorOutline.style.opacity = 1;
    cursorOutline.animate({
      left: postX + 'px',
      top: postY + 'px',
      display: 'block',
    }, {duration : 500, fill: 'forwards'});
  }	  

  if (window.matchMedia("(max-width:700px)").matches){
    cursorDot.style.display = "none";
    cursorOutline.style.opacity = 0;
  }
  else {
    cursorDot.style.display = "block";
  }
  

});

});



function toggleLanguage(language) {
  let text = document.getElementById("english-description");
  let text2 = document.getElementById("firstOne");
  let text3 = document.getElementById("middle");
  let text4 = document.getElementById("lastOne");
  let text5 = document.getElementById("btn");
  let text6 = document.getElementById("btn2");
  let text7 = document.getElementById("title-banner2");
  let text8 = document.getElementById("subtitle-banner2");
  let text9 = document.getElementById("contact");
  let myshop = document.getElementById("myshop-subtitle");
  let garagee = document.getElementById("garagee-subtitle");
  let weather = document.getElementById("weather-subtitle");
  let doCheckMe = document.getElementById("doCheckMe-subtitle");
  let JavaChess = document.getElementById("JavaChess-subtitle");
  let HelpMeChat = document.getElementById("HelpMeChat-subtitle");
  let navproject = document.getElementById("nav-project");
  let navcontact = document.getElementById("nav-contact");

  let text11 = document.getElementById("form-title");
  let text13 = document.getElementById("submit");
  let text14 = document.getElementById("right-text");
  let english = document.getElementsByClassName("English");

  if (language === "English") {
    text.innerHTML = " HI, THERE 👋. I'm";
    text2.innerHTML = "I'm a fullstack developer from Brazil.";
    text3.innerHTML = "Focused on creating amazing and efficient user experiences.";
    text4.innerHTML = "Passionate about coding and solving complex problems.";
    text5.style.display = "none";
    text6.style.display = "flex";
    text7.innerHTML = "FEATURED PROJECTS —";
    text8.innerHTML = "Stuff I've Worked On <span style=`font-size: 25px;`>🚀🛠️</span>";
    text9.innerHTML = "Contact Me";
    navproject.innerHTML = "Projects";
    navcontact.innerHTML = "Contact";
    myshop.innerHTML = "is an e-commerce application developed with React and TypeScript. The project demonstrates the creation of a dynamic and responsive interface focused on usability and performance";
    garagee.innerHTML = "Garagee is a web application designed to manage and streamline automotive service operations. Built with React and Next.js, it enables users to manage services, orders, and client data efficiently. The platform allows for adding, updating, and consulting services, products, and customer orders.";
    weather.innerHTML = "An app built with HTML, CSS, and TypeScript. It allows users to search for a city's weather by entering its name. The app fetches data from the OpenWeatherMap API and displays information such as temperature, humidity, wind speed, and local time. The result is dynamically shown on the page with an icon representing the current weather.";
    doCheckMe.innerHTML = "This web app allows users to manage tasks by adding, marking as completed, and removing them. It uses JavaScript to update the task list dynamically and stores the tasks in local storage for persistence. It also provides functionality to delete tasks and ensures the task list is saved across sessions.";
    JavaChess.innerHTML = "The game includes validations for moves, check and checkmate detection, and uses object-oriented programming principles like inheritance and polymorphism. It dynamically updates the board state and supports user interactions for gameplay.";
    HelpMeChat.innerHTML = "This project leverages advanced technologies from Operating Systems, Networking Protocols, and Data Structures to implement a real-time counseling chat. Threads and mutex ensure concurrency and mutual exclusion on the server, while client-server communication is handled via TCP/IP with standardized messages using dictionaries.";

    text11.innerHTML = "Let's work together.";
    text13.innerHTML = "Send";
    text14.innerHTML = "Contact Information.";
    
    
  }
  else {
    text.innerHTML = "Show English Text";
  }
}