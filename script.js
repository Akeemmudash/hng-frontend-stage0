function toggleBioText() {
  const bioTextEl = document.querySelector(".bio");
  const toggleButton = document.querySelector(".toggle-fulltext__btn");
  bioTextEl.classList.toggle("toggle-bio-text");
  toggleButton.classList.toggle("flip");
}

function updateUTCTime() {
  const timeEL = document.getElementById("utc-time");
  const currentDateTime = new Date();
  const utcTime = currentDateTime.toUTCString();
  timeEL.innerHTML = utcTime;
}
setInterval(updateUTCTime, 1000);

updateUTCTime();
