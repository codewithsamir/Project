// validate form program 

function validat(){
    let x = document.forms["fform"]["fname"].value

    if(x == "" ){
        alert("please enter your name")
        return false
    }

}