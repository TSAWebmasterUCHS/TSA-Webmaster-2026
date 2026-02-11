console.log("JavaScript is connected!");

// -------------------- EVENTS LIST --------------------
const eventsListData = [
  { 
    title: "5th Annual Spring Downtown Market",
    startDate: "2026-04-19",
    endDate: "2026-04-19",
    location: "Downtown Blairsville",
    description: "Enjoy local vendors, crafts, fresh produce, and live music."
  },
  {
    title: "Memorial Day Parade",
    startDate: "2026-05-24",
    endDate: "2026-05-24",
    location: "Downtown Blairsville",
    description: "Watch and enjoy Blairsville salute those who have served our country."
  },
  {
    title: "Butternut Creek Festival",
    startDate: "2026-06-19",
    endDate: "2026-06-20",
    location: "Meeks Park",
    description: "Celebrate the art of the mountain region with handcrafted arts and crafts, as well as live entertainment."
  },
  {
    title: "Local Business Workshop",
    startDate: "2026-03-18",
    endDate: "2026-03-18",
    location: "Community Center",
    description: "Workshop for local business owners."
  },
  {
    title: "Spring Festival",
    startDate: "2026-03-25",
    endDate: "2026-03-25",
    location: "Town Park",
    description: "Fun festival with games and food."
  }
];

// -------------------- CALENDAR --------------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("Calendar loaded");

  const monthYear = document.getElementById("monthYear");
  const calendarGrid = document.querySelector(".calendar-grid");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

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

      const currentDay = new Date(fullDate);

      eventsListData.forEach(event => {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);

        if (currentDay >= start && currentDay <= end) {
          classes += " has-event";
          eventHTML += `<div class="event-title">${event.title}</div>`;
        }
      });

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
