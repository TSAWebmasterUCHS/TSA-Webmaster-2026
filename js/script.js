console.log("JavaScript is connected!")

const events = [
  { 
        title: "Union County Farmers Market", 
        date: "March 15, 2026", 
        location: "Downtown Blairsville",  
        description: "Fresh local produce and family-friendly activities." 
  }, 
  { 
        title: "Library Story Time", 
        date: "March 20, 2026",  
        location: "Union County Public Library", 
        description: "Weekly reading event for young children." 
  },
  {
        title: "Community Health Fair", 
        date: "April 5, 2026",
        location: "Union General Hospital", 
        description: "Free screenings and health resources for families." 
  } 
]; 

const eventlist = document.getElementById("eventlist"); 
if (eventlist) { 
    events.forEach(event => { 
        const card = document.createElement("div"); 
        card.classList.add("event-card"); 
        card.innerHTML = ' 
            <h3>${event.title}</h3> 
            <p><strong>Date:</strong> ${event.date}</p> 
            <p><strong>Location: </strong> ${event.location}</p> 
            <p>${event.description}</p> 
        '; 
      eventlist.appendChild(card); 
  }); 
}

const resourceForm = document.getElementById("resourceForm"); 
const formMessage = document.getElementById("formMessage"); 

if (resourceForm) { 
    resourceForm.addEventlistener("submit", function(e) { 
        e.preventDefault(); 


       formMessage.textContent = "Thank you! Your resource has been submitted."; 
       formMessage.style.color = "#1f3d2b"; 
       formMessage.style.fontweight ="bold"; 


       resourceForm.reset(); 


       setTimeout(() => { 
            formMessage.textContent = ""; 
       }, 5000); 
   }); 
}

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

    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
      calendarGrid.innerHTML += `<div class="day">${day}</div>`;
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

document.getElementById('resource-form').addEventListener('submit', function(e) {
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
  document.getElementById('form-message').textContent = 'Resource submitted!';
});
