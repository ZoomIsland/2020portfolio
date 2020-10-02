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
const root = document.documentElement;
const spinner = document.getElementById("spinner");
const spinButton = document.querySelector(".spinBtn");
const pauseButton = document.querySelector(".pauseSpinnerBtn")
let isPaused = false;
const projectRotate = setInterval(() => rotateSpinner(), 5000);
spinButton.addEventListener("click", () => {
  isPaused = true;
  pauseButton.innerHTML = "<p>Continue</p>"
  spinner.style.animation = "spin 1000ms 2 linear";
  const selectedDegree = degreePicker();
  root.style.setProperty('--finalRotation', selectedDegree);
  setTimeout(() => {
    spinner.style.animation = "finalSpin 1000ms 1 ease-out forwards"
    setTimeout(() => {
      loadPage(selectedDegree);
      root.style.setProperty('--startRotation', selectedDegree);
      root.style.setProperty('--finalRotation', selectedDegree);
      root.style.setProperty('--nextRotation', nextDegree(selectedDegree));
      spinner.style.animation = "none";
      root.style.setProperty('--nextRotation')
    }, 1000)
  }, 2000)
})
pauseButton.addEventListener("click", () => {
  if (isPaused) {
    pauseButton.innerHTML = "<p>Pause</p>"
    isPaused = false;
  } else {
    pauseButton.innerHTML = "<p>Continue</p>"
    isPaused = true;
  }
})

// Projects
const allProjs = document.querySelector(".allProjects");
const lessProjs = document.querySelector(".lessProjects");
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
  navClick("projects")
})
lessProjs.addEventListener("click", () => {
  navClick();
  allProjs.classList.remove("hidden");
})



// About cards
const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("click", () => {
    card.style.animation = "zIndexChange 0.8s 1 forwards";
    card.firstElementChild.style.animation = "cardFlip 0.8s 1 forwards";
  })
}

// Contact form
const formSubmitBtn = document.querySelector(".formSubmit");
formSubmitBtn.addEventListener("click", formSubmit)


// functions
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
  const contactForm = document.querySelector(".contactContainer");
  const aboutCards = document.querySelector(".aboutCards");
  const homeScreen = document.querySelector(".homeScreen");
  const spacer = document.querySelector(".spacer");
  contactForm.style.marginTop = "-100vh";
  aboutCards.style.marginTop = "-450px";
  homeScreen.style.marginTop = "-200px";

  for (const project of projects) {
    project.classList.add("hidden");
  }

  switch (element) {
    case "about":
      isPaused = true;
      allProjs.classList.add("hidden");
      lessProjs.classList.add("hidden");
      aboutCards.style.marginTop = "25px";
      const cards = document.querySelectorAll(".card");
      for (const card of cards) {
        card.style.animation = "none";
        card.firstElementChild.style.animation = "none";
      }
      setTimeout(() =>{
        aboutCards.firstElementChild.style.animation = "zIndexChange 0.8s 1 forwards";
        aboutCards.firstElementChild.firstElementChild.style.animation = "cardFlip 0.8s 1 forwards";
      }, 250)
      break;
    case "projects":
      isPaused = true;
      for (const project of projects) {
        project.classList.remove("hidden");
      }
      allProjs.classList.add("hidden");
      lessProjs.classList.remove("hidden");
      spacer.style.height = "15px";
      break;
    case "contact":
      isPaused = true;
      allProjs.classList.add("hidden");
      lessProjs.classList.add("hidden");
      spacer.style.height = "0px";
      contactForm.style.marginTop = "0px";
      break;
    default:
      allProjs.classList.remove("hidden");
      lessProjs.classList.add("hidden");
      tweet2020.classList.remove("hidden");
      // reset spinner
      root.style.setProperty('--startRotation', "0deg");
      root.style.setProperty('--finalRotation', "360deg");
      root.style.setProperty('--nextRotation', "45deg");
      //load elements
      spacer.style.height = "170px";
      homeScreen.style.marginTop = "0px";
      isPaused = false;
  }
}

function loadPage(degree) {
  for (const project of projects) {
    project.classList.add("hidden");;
  }
  switch(degree) {
    case "360deg":
      tweet2020.classList.remove("hidden");;
      break;
    case "0deg":
      tweet2020.classList.remove("hidden");;
      break;
    case "45deg":
      haikuReview.classList.remove("hidden");;
      break;
    case "90deg":
      myBookshelf.classList.remove("hidden");;
      break;
    case "135deg":
      spacewars.classList.remove("hidden");;
      break;
    case "180deg":
      tarot.classList.remove("hidden");;
      break;
    case "225deg":
      wayfayer.classList.remove("hidden");;
      break;
    case "270deg":
      zamagotchi.classList.remove("hidden");;
      break;
    case "315deg":
      skyline.classList.remove("hidden");;
      break;
  }
}

function revealError(div, bool) {
  if (bool) {
    div.firstElementChild.classList.add("hidden")
  } else {
    div.firstElementChild.classList.remove("hidden")
  }

}

async function formSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const messageText = document.getElementById("message").value;

  // validation
  const re = /\S+@\S+\.\S+/;
  const nameDiv = document.querySelector(".name");
  if (!name) {
    revealError(nameDiv, false);
    errors.push('Name');
  } else {
    revealError(nameDiv, true);
  }
  const emailDiv = document.querySelector(".email")
  if (!re.test(email)) {
    revealError(emailDiv, false)
  } else {
    revealError(emailDiv, true)
  }
  const messageDiv = document.querySelector(".message");
  if (!messageText) {
    revealError(messageDiv, false)
  } else {
    revealError(messageDiv, true)
  }
  
  // api call
  if (name && re.test(email) && messageText) {
    const data = {};
    data.name = name;
    data.email = email;
    data.howFind = document.getElementById("howFind").value;
    data.message = messageText;
    let response = await fetch('https://contactzach.herokuapp.com/api/v1/messages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    navClick();
  }
}