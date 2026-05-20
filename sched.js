// GET SERVICE FROM URL
const params = new URLSearchParams(window.location.search);
document.getElementById("service").innerText = params.get("service");
document.getElementById("price").innerText = "₱" + params.get("price");

// CURRENT DATE
const today = new Date();
today.setHours(0, 0, 0, 0);

// SET YOUR CALENDAR MONTH/YEAR (example: April 2026)
const currentYear = today.getFullYear();
const currentMonth = today.getMonth(); // 0 = Jan, 3 = April, etc.

// GENERATE CALENDAR
const datesContainer = document.getElementById("dates");

for (let i = 1; i <= 30; i++) {
  let day = document.createElement("div");
  day.innerText = i;

  // build full date
  const date = new Date(currentYear, currentMonth, i);

  // disable past dates
  if (date < today) {
    day.classList.add("disabled");
  } else {
    day.onclick = function () {
      document.querySelectorAll(".dates div").forEach(d => d.classList.remove("active-date"));
      day.classList.add("active-date");
      document.getElementById("selectedDate").innerText = "Date: April " + i;
    };
  }

  datesContainer.appendChild(day);
}

// TIME SELECT
document.querySelectorAll(".time-grid button").forEach(btn => {
  btn.onclick = function () {
    document.querySelectorAll(".time-grid button").forEach(b => b.classList.remove("selected-time"));
    btn.classList.add("selected-time");
    document.getElementById("selectedTime").innerText = "Time: " + btn.innerText;
  };
});