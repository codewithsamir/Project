// format date with expected output (mm-dd-yyyy)(mm/dd/yyyy)

let todaydate = new Date();
let yyy = todaydate.getFullYear();
let mm = todaydate.getMonth()
let dd = todaydate.getDay()

const first = document.getElementById("first")
const sec = document.getElementById("second")
const third = document.getElementById("third")
const four = document.getElementById("fourth")

first.innerText = `${mm}-${dd}-${yyy} `
sec.innerText = `${mm}/${dd}/${yyy} `
four.innerText = `${dd}/${mm}/${yyy} `
third.innerText = `${dd}-${mm}-${yyy} `