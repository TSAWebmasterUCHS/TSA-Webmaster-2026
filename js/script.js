console.log("JavaScript is connected!");

// -------------------- EVENTS LIST --------------------
const events = {
  "2026-03-15": {
    title: "Union County Farmers Market",
    location: "Downtown Blairsville",
    description: "Fresh local produce and family-friendly activities.",
    link: "https://example.com/farmersmarket"
  },
  "2026-03-20": {
    title: "Library Story Time",
    location: "Union County Public Library",
    description: "Weekly reading event for young children.",
    link: "https://example.com/storytime"
  },
  "2026-04-05": {
    title: "Community Health Fair",
    location: "Union General Hospital",
    description: "Free screenings and health resources for families.",
    link: "https://example.com/healthfair"
  }
};

const eventList = document.getElementById("eventlist");

if (eventList) {
  Object.keys(events).forEach(date => {
    const event = events[date];

    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
      <a href="${event.link}" target="_blank">More Info</a>
    `;
    eventList.appendChild(card);
  });
}


// -------------------- RESOURCE SUBMISSION FORM --------------------
const resourceForm = document.getElementById("resource-form");
const formMessage = document.getElementById("form-message");

if (resourceForm) {
  resourceForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('resource-name').value;
    const location = document.getElementById('resource-location').value;
    const website = document.getElementById('resource-website').value;

    const list = document.querySelector('.spotlight-list');

    // Create new spotlight card
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Location: ${location}</p>
      <p>Website: <a href="${website}" target="_blank">${website}</a></p>
    `;
    list.appendChild(card);

    // Clear form and show confirmation
    this.reset();
    formMessage.textContent = 'Resource submitted!';
    formMessage.style.color = "#1f3d2b";
    formMessage.style.fontWeight = "bold";

    // Remove message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
}

// -------------------- CALENDAR --------------------
const monthYear = document.getElementById("monthYear");
const calendarGrid = document.querySelector(".calendar-grid");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

if (monthYear && calendarGrid) {
  let currentDate = new Date();

  function renderCalendar() {
    calendarGrid.innerHTML = `
      <div class="day-name">Sun</div>
      <div class="day-name">Mon</div>
      <div class="day-name">Tue</div>
      <div class="day-name">Wed</div>
      <div class="day-name">Thu</div>
      <div class="day-name">Fri</div>
      <div class="day-name">Sat</div>
    `;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Empty divs for days before the first day
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }

for (let day = 1; day <= lastDate; day++) {
  const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  let eventHTML = "";

  if (events[fullDate]) {
    eventHTML = `
      <a href="${events[fullDate].link}" 
         target="_blank" 
         class="calendar-event">
        ${events[fullDate].title}
      </a>
    `;
  }

  calendarGrid.innerHTML += `
    <div class="day">
      <span class="day-number">${day}</span>
      ${eventHTML}
    </div>
  `;
}


  prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
}
