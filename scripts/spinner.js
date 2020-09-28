const spinner = document.getElementById("spinner");
const button = document.querySelector(".spinButton");

button.addEventListener("click", () => {
  spinner.style.animation = "spin 1000ms 2 linear";
  const selectedDegree = degreePicker();
  document.documentElement.style.setProperty('--finalRotation', selectedDegree);
  setTimeout(() => {
    spinner.style.animation = "finalSpin 1000ms 1 ease-out forwards"
  }, 2000)
})

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

