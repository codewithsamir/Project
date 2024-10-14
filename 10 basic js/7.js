// display alert for prompt message 

function showalert(){
    let text;
let usermm = prompt("enter your name")
if(usermm == "" && usermm ==null){
    text= "your cancelled the prompt"
}else{
    text=`helle ${usermm} Goodmorning`
}
alert(text)

}