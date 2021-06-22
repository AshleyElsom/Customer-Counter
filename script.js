let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function add(){
  count += 1
  countEl.textContent = count   
}

function subtract(){
 count -=1
 countEl.textContent = count
}

function reset(){
 count = 0
 countEl.textContent = count
}

function save(){
 let countLog = count + " - "
 saveEl.textContent += countLog
 countEl.textContent = 0
 count = 0
}

function resetAll(){
 saveEl.textContent = "Previous Entries:"
}


