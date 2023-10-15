 const textareaE1 = document.getElementById("textarea")


 const totalCounterE1 = document.getElementById("total-counter")

 const remaningCounter = document.getElementById("remaning-counter")


 textareaE1.addEventListener("keyup",() => {
    updateCounter()
 })

 function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length
    remaningCounter.innerText = textareaE1.getAttribute("maxLength") - 
    textareaE1.value.length

 }