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
               
