// screen program using javascript
const show1 = document.querySelector(".show1")
const show2 = document.querySelector(".show2")
const show3 = document.querySelector(".show3")
const show4 = document.querySelector(".show4")

show1.innerText = screen.width;
show2.innerText = screen.height;
show3.innerText = screen.colorDepth;
show4.innerText = screen.pixelDepth;
