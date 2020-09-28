const home = document.querySelector(".nav-home");
const about = document.querySelector(".nav-about");
const projects = document.querySelector(".nav-projects");
const contact = document.querySelector(".nav-contact");
const moreProjects = document.querySelector(".moreProjects");

function navClick(element) {
  const spinner = document.querySelector(".spinner");
  const contactForm = document.querySelector(".contactContainer");
  const aboutCards = document.querySelector(".aboutCards");
  const homeScreen = document.querySelector(".homeScreen");
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
      spinner.style.height = "200px";
      break;
    case "contact":
      contactForm.style.height = "600px";
      break;
    default:
      homeScreen.style.height = "800px";
  }
}

home.addEventListener("click", navClick);
about.addEventListener("click", () => navClick("about"));
projects.addEventListener("click", () => navClick("projects"));
contact.addEventListener("click", () => navClick("contact"));
moreProjects.addEventListener("click", () => navClick("projects"));
