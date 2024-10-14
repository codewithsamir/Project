const btn = document.querySelector(".btn")

const text = document.querySelector(".btn h3")
const loading = document.querySelector(".btn div")

btn.addEventListener("click",()=>{
    text.classList.toggle("active") 
    loading.classList.toggle("loading")
})