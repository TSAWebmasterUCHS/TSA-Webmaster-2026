console.log("JavaScript is connected!");

// -------------------- EVENTS LIST --------------------
const eventsListData = [
  { 
    title: "5th Annual Spring Downtown Market",
    startDate: "2026-04-19",
    endDate: "2026-04-19",
    location: "Downtown Blairsville",
    description: "Enjoy local vendors, crafts, fresh produce, and live music.",
    link: ""
  },
  {
    title: "Memorial Day Parade",
    startDate: "2026-05-24",
    endDate: "2026-05-24",
    location: "Downtown Blairsville",
    description: "Watch and enjoy Blairsville salute those who have served our country.",
    link: ""
  },
  {
    title: "Butternut Creek Festival",
    startDate: "2026-07-19",
    endDate: "2026-07-20",
    location: "Meeks Park",
    description: "Celebrate the art of the mountain region with handcrafted arts and crafts, as well as live entertainment.",
    link: "https://www.butternutcreekfestival.com/"
  },
  {
    title: "Mountain Heritage Festival",
    startDate: "2026-08-30",
    endDate: "2026-08-31",
    location: "Mountain Life Museum",
    description: "Celebrate Appalachian culture with live music, crafts, and local food.",
    link: "https://www.unioncountyhistory.org/"
  },
  {
    title: "Mountain Music Day at Vogel State Park",
    startDate: "2026-09-13",
    endDate: "2026-09-13",
    location: "Vogel State Park",
    description: "Enjoy the Mountain Music Day with traditional Appalachian tunes, and family-friendly fun in the North Georgia Mountains.",
    link: "https://gastateparks.org/Vogel"
  }, 
  {
    title: "BEAR Blairsville Extreme Adventure Race",
    startDate: "2026-09-20",
    endDate: "2026-09-20",
    location: "Meeks Park",
    description: "Teams explore the mountains, rivers, lakes, and woods around Blairsville through this eight-hour race.",
    link: "https://www.warriorraces.com/bear"
  }, 
  {
    title: "Indian Summer Festival",
    startDate: "2026-10-04",
    endDate: "2026-10-05",
    location: "Woody Gap School",
    description: "Enjoy activities including a craft sale, auctions, live entertainment, local food, and much more.",
    link: "https://www.indiansummerfestival.org/"
  }, 
  {
    title: "Sorghum in the Mountains Festival",
    startDate: "2026-10-11",
    endDate: "2026-10-12",
    location: "Meeks Park",
    description: "Celebrate the art of Sorghum Syrup Making with arts/crafts, live music, log sawin', and many more.",
    link: "https://www.sorghuminthemountains.com/"
  }, 
  {
    title: "Blairsville Boo Bash",
    startDate: "2026-10-31",
    endDate: "2026-10-31",
    location: "Meeks Park",
    description: "Bring the kids and join the fun with a spectacular trick-or-treat event!",
    link: ""
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

    // Calendar header
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
    monthYear.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div class="day empty"></div>`;
    }

    // Fill in days
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
          if (event.link) {
            eventHTML += `<a href="${event.link}" target="_blank" class="event-title">${event.title}</a><br>`;
          } else {
            eventHTML += `<div class="event-title">${event.title}</div>`;
          }
        }
      });

      calendarGrid.innerHTML += `<div class="${classes}"><div class="day-number">${day}</div>${eventHTML}</div>`;
    }
  }

  // Month navigation
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

// -------------------- SEARCH FILTER --------------------
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
