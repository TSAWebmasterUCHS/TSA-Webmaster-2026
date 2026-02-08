console.log("JavaScript is connected!");

const eventsListData = [
  { 
    title: "Union County Farmers Market", 
    date: "2026-03-15", 
    location: "Downtown Blairsville",  
    description: "Fresh local produce and family-friendly activities." 
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

// Render events list
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

// =======================
// CALENDAR
// =======================
const calendarEvents = {};
eventsListData.forEach(e => {
  calendarEvents[e.date] = { name: e.title, link: "#" };
});

const monthYear = document.getElementById("monthYear");
const calendarGrid = document.querySelector(".calendar-grid");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
  if (!calendarGrid || !monthYear) return;

  // Add day names
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

  // Empty cells for first week
  for (let i = 0; i < firstDay; i++) {
    calendarGrid.innerHTML += `<div class="day"></div>`;
  }

  // Days
  for (let day = 1; day <= lastDate; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    let dayContent = `<div class="day"><div class="day-number">${day}</div>`;

    if (calendarEvents[fullDate]) {
      dayContent += `<a href="${calendarEvents[fullDate].link}" target="_blank">${calendarEvents[fullDate].name}</a>`;
    }

    dayContent += `</div>`;
    calendarGrid.innerHTML += dayContent;
  }
}

if (prevMonth) prevMonth.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); });
if (nextMonth) nextMonth.addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); });

renderCalendar();

const allResources = [
  { name: "Union County Library", description: "Books, events, learning resources", website: "#", date: "2026-03-01", location: "123 Library St", spotlight: true },
  { name: "Community Garden", description: "Volunteer-run garden", website: "#", date: "2026-03-10", location: "456 Garden Lane", spotlight: true },
  { name: "Local Youth Center", description: "After-school programs", website: "#", date: "2026-03-15", location: "789 Youth Ave", spotlight: true },
  { name: "Historical Society", description: "Preserving local history", website: "#", date: "2026-03-20", location: "101 History Rd", spotlight: false },
  { name: "New Community Resource", description: "Example resource", website: "#", date: "2026-03-25", location: "202 New St", spotlight: false }
];

const spotlightList = document.querySelector(".spotlight-list");

allResources.forEach(resource => {
  const card = document.createElement("div");
  card.className = "spotlight-card";

  if (resource.spotlight) card.style.fontWeight = "bold";

  card.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <p><strong>Date:</strong> ${resource.date}</p>
    <p><strong>Location:</strong> ${resource.location}</p>
    <p>Website: <a href="${resource.website}" target="_blank">${resource.website}</a></p>
  `;

  spotlightList.appendChild(card);
});

const resourceSearch = document.getElementById("resource-search");
if (resourceSearch) {
  resourceSearch.addEventListener("input", () => {
    const searchValue = resourceSearch.value.toLowerCase();
    const filteredResources = allResources.filter(resource =>
      resource.name.toLowerCase().includes(searchValue) ||
      resource.description.toLowerCase().includes(searchValue)
    );
    renderSpotlightResources(filteredResources);
  });
}

// Initial render of all resources
renderSpotlightResources(allResources);
