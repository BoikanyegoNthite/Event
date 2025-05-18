const countdownDate = new Date("June 21, 2025 00:00:00").getTime();

const countdownFunc = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownFunc);
    document.querySelector(".countdown").innerHTML = "<h2>Game Time! ⚽🎉</h2>";
    launchConfetti();
  }
}, 1000);

// 🎉 Confetti launcher
function launchConfetti() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Emit confetti from left and right
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: 0.1, y: 0.6 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: 0.9, y: 0.6 } }));
  }, 250);
}

  window.addEventListener("load", () => {
    if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookie-banner").style.display = "block";
    }
  });

  document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
  });

