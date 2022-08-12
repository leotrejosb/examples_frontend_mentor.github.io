const tablero = document.querySelector(".tablero")

const gracias = document.querySelector(".gracias")

const submit = document.getElementById("submit")

const rateAgain = document.getElementById("regresar")

const rating = document.getElementById("rate")

const rates = document.querySelectorAll(".botones") 

submit.addEventListener("click",()=>{
    console.log("Goal")
    gracias.classList.remove("escondido")
    tablero.style.display = "none"
    
})

rateAgain.addEventListener("click",()=>{
    console.log("Rate")
    gracias.classList.add("escondido")
    tablero.style.display = "block"
})

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML
    })
})