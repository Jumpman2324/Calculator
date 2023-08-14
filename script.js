const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculate = document.querySelector(".calculate")
const results = document.getElementById("result")
const clear = document.querySelector(".clear")


numbers.forEach(button  => {
    button.addEventListener("click", () => {
        results.value += button.textContent
    })
}) 

operators.forEach(button => {
    button.addEventListener("click", () =>{
        results.value += button.textContent
    })
})

clear.addEventListener("click", () =>{
    results.value = ""
})

calculate.addEventListener("click" , () =>{
    try {

        results.value = eval(results.value)
    }
    catch (error) {
        results.value = "Error"
    }
   
})