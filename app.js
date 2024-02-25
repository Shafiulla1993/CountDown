const eventDate = "28 February 2024 10:00 PM";
const inputs = document.querySelectorAll("input");

document.getElementById("eventDate").innerText = eventDate;



const clock =() => {
    const end = new Date(eventDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    
    // to stop the timer after reaching event time
    if (diff <= 0) return;
    
    // to convert into days
    inputs[0].value = Math.floor(diff/3600/24);

    // to convert into hours
    inputs[1].value = Math.floor(diff/3600)%24;

    // to convert into minutes
    inputs[2].value = Math.floor(diff/60)%60;

    // to convert into seconds
    inputs[3].value = Math.floor(diff)%60;
}

// initial call for function
clock()

// to change the time on every second
setInterval ( ()=> {
    clock()
},1000
);