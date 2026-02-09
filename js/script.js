console.log("JavaScript is connected!"); 
console.log("Calendar loaded");

// -------------------- EVENTS LIST --------------------
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

// -------------------- POPULATE EVENTS LIST --------------------
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
console.log("Calendar loaded");

// EVENTS DATA (edit/add here)
const calendarEvents = {
  "2026-03-12": { title: "Community Cleanup Day", link: "#" },
  "2026-03-15": { title: "Farmers Market", link: "#" },
  "2026-03-18": { title: "Business Workshop", link: "#" },
  "2026-03-20": { title: "Library Story Time", link: "#" },
  "2026-03-25": { title: "Spring Festival", link: "#" }
};

document.addEventListener("DOMContentLoaded", () => {

  const monthYear = document.getElementById("monthYear");
  const calendarGrid = document.querySelector(".calendar-grid");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  if (!calendarGrid || !monthYear) return;

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
      calendarGrid.innerHTML += `
        <div class="day">
          <div class="day-number">${day}</div>
        </div>
      `;
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
});

// -------------------- SPOTLIGHT RESOURCES --------------------
const ourResources = [
  {
    name: "Union County Library",
    description: "A great place for books, events, and learning resources for all ages.",
    website: "https://www.unioncountylibrary.com",
    spotlight: true
  },
  {
    name: "Community Garden",
    description: "Volunteer-run garden offering fresh produce and gardening classes.",
    website: "https://www.communitygarden.org",
    spotlight: true
  },
  {
    name: "Local Youth Center",
    description: "After-school programs, sports, and mentoring for children and teens.",
    website: "https://www.localyouthcenter.com",
    spotlight: true
  },
  {
    name: "Historical Society",
    description: "Preserving local history with tours, exhibits, and educational programs.",
    website: "https://www.historicalsociety.org",
    spotlight: false
  },
  {
    name: "Food Bank",
    description: "Helps families in need with food and essentials.",
    website: "https://www.localfoodbank.org",
    spotlight: false
  }
];

// Containers
const spotlightList = document.querySelector(".spotlight-list");
const allResourcesList = document.querySelector(".all-resources-list");

ourResources.forEach(resource => {
  const card = document.createElement("div");
    card.classlist.add("spotlight-card");
    card.innerHTML = `
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
      <p>Website: <a href="${resource.website}" target="_blank">${resource.website}</a></p>
    `;
    spotlightList.appendChild(card); 
  } 
}); 

const allResources = document.getElementById("all-resources");

resource.foreach(resource => {
  const li = document.createElement("li"); 
  li.innerHTML = '<a href="${resource.website}" target="_blank">${resource.name}</a>'; 
  allResourcesList.appendChild(li);
});
 
console.log("End of JS file reached");
