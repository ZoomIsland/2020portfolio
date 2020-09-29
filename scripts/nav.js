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
    loadPage(nextRotation);
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

function loadPage(degree) {
  console.log(degree);
  const tweet2020 = document.querySelector(".tweet2020");
  const myBookshelf = document.querySelector(".myBookshelf");
  const haikuReview = document.querySelector(".haikuReview");
  const wayfayer = document.querySelector(".wayfayer");
  const skyline = document.querySelector(".skyline");
  const tarot = document.querySelector(".tarotProject");
  const zamagotchi = document.querySelector(".zamagotchi");
  const spacewars = document.querySelector(".spacewars");
  const projects = [tweet2020, myBookshelf, haikuReview, wayfayer, skyline, tarot, zamagotchi, spacewars];
  for (const project of projects) {
    project.style.height = "0px";
  }

    // makes all internal projects display none

  // then switch makes one of them display auto
  switch(degree) {
    case "360deg":
      tweet2020.style.height = "auto";
      break;
    case "0deg":
      tweet2020.style.height = "auto";
      break;
    case "45deg":
      myBookshelf.style.height = "auto";
      break;
    case "90deg":
      haikuReview.style.height = "auto";
      break;
    case "135deg":
      wayfayer.style.height = "auto";
      break;
    case "180deg":
      skyline.style.height = "auto";
      break;
    case "225deg":
      tarot.style.height = "auto";
      break;
    case "270deg":
      zamagotchi.style.height = "auto";
      break;
    case "315deg":
      spacewars.style.height = "auto";
      break;
  }
}