let hoursEl = document.getElementById("hoursInput")
let minutesEl = document.getElementById("minutesInput")
let buttonEl = document.getElementById("convertBtn")

let errorMsgEl = document.getElementById("errorMsg")
let resultEl = document.getElementById("timeInSeconds")

let hoursEmptyMsg = "Please enter a valid number of hours."
let minutesEmptyMsg = "Please enter a valid number of minutes."

resultEl.classList.remove("result")

let convertToSeconds = function () {

    let hours = hoursEl.value
    let minutes = minutesEl.value

    let hoursN = parseInt(hoursEl.value)
    let minutesN = parseInt(minutesEl.value)

    let result = (hoursN * 60 + minutesN) * 60
    if ((hours === "") && (minutes === "")) {

        resultEl.textContent = ""
        resultEl.classList.remove("result")
        errorMsgEl.textContent = hoursEmptyMsg

    } else if (hours === "") {

        resultEl.textContent = ""
        resultEl.classList.remove("result")
        errorMsgEl.textContent = hoursEmptyMsg
    } else if (minutes === "") {

        resultEl.textContent = ""
        resultEl.classList.remove("result")
        errorMsgEl.textContent = minutesEmptyMsg
    } else {
        resultEl.textContent = result
        errorMsgEl.textContent = ""
        resultEl.classList.add("result")
    }

}

buttonEl.addEventListener("click", convertToSeconds)