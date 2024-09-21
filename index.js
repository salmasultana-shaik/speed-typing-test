let quoteDisplayEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let spinnerId = document.getElementById("spinner")

let uniqueId = setInterval(function() {
    let timerVal = timerEl.textContent;
    let result = parseInt(timerVal) + 1;
    timerEl.textContent = result;
}, 1000)
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let data = jsonData.content
        quoteDisplayEl.textContent = data;
    });

console.log(jsonData.content)
submitBtnEl.addEventListener("click", function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(uniqueId);
        spinnerEl.classList.remove("d-none");
        resultEl.textContent = "success";
        spinnerEl.classList.add("d-none");
    }
});
