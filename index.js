let intervalId;


function startClock24(){
    
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    function updateClock24() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, 0);
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById(`clock`).textContent = timeString;
    }

    updateClock24();

    intervalId = setInterval(updateClock24, 1000);
}


function startClockAMPM(){
    
    if (intervalId) {
        clearInterval(intervalId);
    }

    function updateClockAMPM(){
        const now = new Date();
        let hours = now.getHours();
        let meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12 || 12).toString().padStart(2, 0);
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
        document.getElementById(`clock`).textContent = timeString;
    }

    updateClockAMPM();

    intervalId = setInterval(updateClockAMPM, 1000);
}

