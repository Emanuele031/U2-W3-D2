const nameInput = document.getElementById("nameInput")
const saveButton = document.getElementById("saveButton")
const removeButton = document.getElementById("removeButton")

const nameForm = document.getElementById("nameForm")

nameInput.value = localStorage.getItem("userName") || " "

nameInput.addEventListener("input", () => {
    localStorage.setItem("userName", nameInput.value)
})

saveButton.addEventListener("click", () => {
    localStorage.setItem("userName", nameInput.value)
    nameInput.value = " "
})

removeButton.addEventListener("click", () => {
    localStorage.removeItem("userName", nameInput.value)
})
//esercizio 1 completato







const count = parseInt(sessionStorage.getItem("counter")) || 0
const intervalId = null
document.getElementById("counter").textContent = "Tempo trascorso: " + count + " secondi";


function startCounter() {
    if(!intervalId){
        intervalId = setInterval(() => {
            count++;
            sessionStorage.setItem("counter", count);
            document.getElementById("counter").textContent = "Tempo trascorso: " + count + " secondi"
        }, 1000)
        
    }
}

function pauseCounter(){
    if(intervalId){
        clearInterval(intervalId)
        intervalId = null
    }
}


function resetCounter(){
    pauseCounter()
    count = 0
    sessionStorage.setItem("counter", count);
    document.getElementById("counter").textContent = "Tempo trascorso: " + count + " secondi";

}


document.getElementById("startButton").addEventListener("click", startCounter())
document.getElementById("pauseButton").addEventListener("click", pauseCounter())
document.getElementById("resetButton").addEventListener("click", resetCounter())
