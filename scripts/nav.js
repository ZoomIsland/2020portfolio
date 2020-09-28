const home = document.querySelector(".nav-home");
const about = document.querySelector(".nav-about");
const projects = document.querySelector(".nav-projects");
const contact = document.querySelector(".nav-contact");

home.addEventListener("click", navClick);
about.addEventListener("click", () => navClick("about"));
projects.addEventListener("click", () => navClick("projects"));
contact.addEventListener("click", () => navClick("contact"));

const projectRotate = setInterval(() => {
  const root = document.documentElement;
  const spinner = document.getElementById("spinner");
  const currentRotation = getComputedStyle(document.documentElement).getPropertyValue('--finalRotation');
  let startRotation = currentRotation;
  if (startRotation === "360deg") {
    startRotation = "0deg";
  }
  root.style.setProperty('--startRotation', startRotation);
  const nextRotation = nextDegree(currentRotation);
  spinner.style.animation = "spinnerRotate 1 250ms forwards";
  setTimeout(() => {
    root.style.setProperty('--startRotation', nextRotation);
    root.style.setProperty('--finalRotation', nextRotation);
    root.style.setProperty('--nextRotation', nextDegree(nextRotation));
    spinner.style.animation = "none";
  }, 250);
}, 5000);

function nextDegree(degree) {
  switch(degree) {
    case "360deg":
      return "45deg";
    case "45deg":
      return "90deg";
    case "90deg":
      return "135deg";
    case "135deg":
      return "180deg";
    case "180deg":
      return "225deg";
    case "225deg":
      return "270deg";
    case "270deg":
      return "315deg";
    case "315deg":
      return "360deg";
    case "0deg":
      return "45deg";
  }
}

function navClick(element) {
  const spinner = document.querySelector(".spinner");
  const contactForm = document.querySelector(".contactContainer");
  const aboutCards = document.querySelector(".aboutCards");
  const homeScreen = document.querySelector(".homeScreen");
  const spacer = document.querySelector(".spacer");
  spinner.style.height = "0px";
  contactForm.style.height = "0px";
  aboutCards.style.height = "0px";
  homeScreen.style.height = "0px";

  switch (element) {
    case "about":
      aboutCards.style.height = "350px";
      const cards = document.querySelectorAll(".card");
      for (const card of cards) {
        card.style.animation = "none";
        card.firstElementChild.style.animation = "none";
      }
      break;
    case "projects":
      spacer.style.height = "200px";
      spinner.style.height = "200px";
      break;
    case "contact":
      spacer.style.height = "0px";
      contactForm.style.height = "calc(100vh - 78px)";
      break;
    default:
      spacer.style.height = "185px";
      spinner.style.height = "75px";
      homeScreen.style.height = "auto";
  }
}