console.log("JavaScript is connected!");

// -------------------- EVENTS DATA --------------------
const events = {
  "2026-03-12": {
    title: "Community Cleanup Day",
    location: "Downtown Blairsville",
    link: "https://example.com/event1"
  },
  "2026-03-18": {
    title: "Local Business Workshop",
    location: "Union County Library",
    link: "https://example.com/event2"
  },
  "2026-03-25": {
    title: "Spring Festival",
    location: "Town Square",
    link: "https://example.com/event3"
  }
};

// -------------------- EVENTS LIST --------------------
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
      <a href="${event.link}" target="_blank">More Info</a>
    `;
    eventList.appendChild(card);
  });
}

// -------------------- CALENDAR --------------------
const monthYear = document.getElementById("monthYear");
const calendarGrid = document.querySelector(".calendar-grid");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

if (monthYear && calendarGrid && prevMonth && nextMonth) {
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

    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

      if (events[dateKey]) {
        calendarGrid.innerHTML += `
          <div class="day has-event">
            <a href="${events[dateKey].link}" target="_blank">
              ${day}<br><small>${events[dateKey].title}</small>
            </a>
          </div>
        `;
      } else {
        calendarGrid.innerHTML += `<div class="day">${day}</div>`;
      }
    }
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

