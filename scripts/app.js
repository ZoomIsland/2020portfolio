// Nav buttons
const home = document.querySelector(".nav-home");
const about = document.querySelector(".nav-about");
const navProjects = document.querySelector(".nav-projects");
const contact = document.querySelector(".nav-contact");
home.addEventListener("click", navClick);
about.addEventListener("click", () => navClick("about"));
navProjects.addEventListener("click", () => navClick("projects"));
contact.addEventListener("click", () => navClick("contact"));

// Spin elements
const spinner = document.getElementById("spinner");
const spinButton = document.querySelector(".spinButton");
let isPaused = false;
const projectRotate = setInterval(() => rotateSpinner(), 5000);

// Projects
const allProjs = document.querySelector(".allProjects");
const tweet2020 = document.querySelector(".tweet2020");
const myBookshelf = document.querySelector(".myBookshelf");
const haikuReview = document.querySelector(".haikuReview");
const wayfayer = document.querySelector(".wayfayer");
const skyline = document.querySelector(".skyline");
const tarot = document.querySelector(".tarotProject");
const zamagotchi = document.querySelector(".zamagotchi");
const spacewars = document.querySelector(".spacewars");
const projects = [tweet2020, myBookshelf, haikuReview, wayfayer, skyline, tarot, zamagotchi, spacewars];
allProjs.addEventListener("click", () => {
  isPaused = true;
  for (const project of projects) {
    project.style.display = "block";
  }
  allProjs.style.display = "none";
})


spinButton.addEventListener("click", () => {
  isPaused = true;
  spinner.style.animation = "spin 1000ms 2 linear";
  const selectedDegree = degreePicker();
  document.documentElement.style.setProperty('--finalRotation', selectedDegree);
  setTimeout(() => {
    spinner.style.animation = "finalSpin 1000ms 1 ease-out forwards"
    setTimeout(() => {
      loadPage(selectedDegree);
    }, 1000)
  }, 2000)
})

// About cards
const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("click", () => {
    card.style.animation = "zIndexChange 0.8s 1 forwards";
    card.firstElementChild.style.animation = "cardFlip 0.8s 1 forwards";
  })
}



function degreePicker() {
  const randomDeg = Math.floor(Math.random() * 360);
  if (randomDeg < 45) {
    return "360deg";
  } else if (randomDeg < 90) {
    return "45deg";
  } else if (randomDeg < 135) {
    return "90deg";
  } else if (randomDeg < 180) {
    return "135deg";
  } else if (randomDeg < 225) {
    return "180deg";
  } else if (randomDeg < 270) {
    return "225deg";
  } else if (randomDeg < 315) {
    return "270deg";
  } else {
    return "315deg";
  }
}

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

function rotateSpinner() {
  if (!isPaused) {
    const root = document.documentElement;
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
  }
}

function navClick(element) {
  const spinContainer = document.querySelector(".spinner");
  const contactForm = document.querySelector(".contactContainer");
  const aboutCards = document.querySelector(".aboutCards");
  const homeScreen = document.querySelector(".homeScreen");
  const spacer = document.querySelector(".spacer");
  spinContainer.style.height = "0px";
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
      spacer.style.height = "215px";
      spinContainer.style.height = "200px";
      break;
    case "contact":
      spacer.style.height = "0px";
      contactForm.style.height = "calc(100vh - 78px)";
      break;
    default:
      allProjs.style.display = "block";
      for (const project of projects) {
        project.style.display = "none";
      }
      tweet2020.style.display = "block";
      spacer.style.height = "185px";
      spinContainer.style.height = "75px";
      homeScreen.style.height = "auto";
      isPaused = false;
  }
}

function loadPage(degree) {
  for (const project of projects) {
    project.style.display = "none";
  }
  switch(degree) {
    case "360deg":
      tweet2020.style.display = "block";
      break;
    case "0deg":
      tweet2020.style.display = "block";
      break;
    case "45deg":
      myBookshelf.style.display = "block";
      break;
    case "90deg":
      haikuReview.style.display = "block";
      break;
    case "135deg":
      wayfayer.style.display = "block";
      break;
    case "180deg":
      skyline.style.display = "block";
      break;
    case "225deg":
      tarot.style.display = "block";
      break;
    case "270deg":
      zamagotchi.style.display = "block";
      break;
    case "315deg":
      spacewars.style.display = "block";
      break;
  }
}