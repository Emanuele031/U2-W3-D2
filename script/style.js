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







let i = sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0
let intervalId = null
document.getElementById("counter").innerText = "Tempo trascorso: " + i + " secondi";


function startCounter() {
    if(!intervalId){
        intervalId = setInterval(() => {
            i++
            sessionStorage.setItem("count", i);
            document.getElementById("counter").innerText = "Tempo trascorso: " + i + " secondi"
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
    i = 0
    sessionStorage.setItem("count", i);
    document.getElementById("counter").innerText = "Tempo trascorso: " + i + " secondi";

}


document.getElementById("startButton").addEventListener("click", startCounter)
document.getElementById("pauseButton").addEventListener("click", pauseCounter)
document.getElementById("resetButton").addEventListener("click", resetCounter)
