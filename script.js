function updateClock() {
  const clock = document.getElementById("clock");
  const dateElement = document.getElementById("date");

  if (!clock) return;

  const now = new Date();

  clock.textContent = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
  }
}

updateClock();
setInterval(updateClock, 1000);