console.log("JavaScript is connected!");

// -------------------- EVENTS LIST --------------------
const eventsListData = [
  { 
    title: "5th Annual Spring Downtown Market ", 
    date: "2026-04-19", 
    location: "Downtown Blairsville",  
    description: "Enjoy local vendors, crafts, fresh produce, and live music." 
  }, 
  { 
    title: "Library Story Time", 
    date: "2026-03-20",  
    location: "Union County Public Library", 
    description: "Weekly reading event for young children." 
  },
  {
    title: "Community Health Fair", 
    date: "2026-04-05",
    location: "Union General Hospital", 
    description: "Free screenings and health resources for families." 
  },
  {
    title: "Community Cleanup Day",
    date: "2026-03-12",
    location: "Main Street",
    description: "Neighborhood cleanup event."
  },
  {
    title: "Local Business Workshop",
    date: "2026-03-18",
    location: "Community Center",
    description: "Workshop for local business owners."
  },
  {
    title: "Spring Festival",
    date: "2026-03-25",
    location: "Town Park",
    description: "Fun festival with games and food."
  }
];

// Populate Events List
const eventList = document.getElementById("eventlist");
if (eventList) {
  eventsListData.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
    `;
    eventList.appendChild(card);
  });
}

// -------------------- CALENDAR --------------------
document.addEventListener("DOMContentLoaded", () => { 
  console.log("Calendar loaded");

  const monthYear = document.getElementById("monthYear");
  const calendarGrid = document.querySelector(".calendar-grid");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  const calendarEvents = {};
  eventsListData.forEach(e => {
    calendarEvents[e.date] = { name: e.title, link: "#" }; // link optional
  });

  let currentDate = new Date();

  function renderCalendar() {
    if (!calendarGrid || !monthYear) return;

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

    // empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div class="day empty"></div>`;
    }

    // fill days
    for (let day = 1; day <= lastDate; day++) {
      const fullDate = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      let classes = "day";
      let eventHTML = "";
      if (calendarEvents[fullDate]) {
        classes += " has-event";
        eventHTML = `<a href="${calendarEvents[fullDate].link}" target="_blank">${calendarEvents[fullDate].name}</a>`;
      }

      calendarGrid.innerHTML += `<div class="${classes}"><div class="day-number">${day}</div>${eventHTML}</div>`;
    }
  }

  if (prevMonth) prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
  if (nextMonth) nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});


const searchInput = document.getElementById("resource-search");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll(".resource-card").forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(term) ? "block" : "none";
    });
  });
}
