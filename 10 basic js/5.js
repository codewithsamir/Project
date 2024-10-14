// popup message  using event

function popup(){
let text;
if(confirm("press the button"))
{
    text= "you press ok button"
}else{
    text="you cancelled the button"

}
document.getElementById("show").innerText = text;
}
