const container = document.querySelector(".container")
const show = document.querySelector(".show")
let pop = 0;

document.addEventListener("mouseover",function(e){
    let show = e.target.className;

    if(show === 'ballon')
    {
        e.target.classList.add("active")
        e.target.innerText = "pop!"
               pop++
        removeevent(e)
        showmessage()

    }
})

function removeevent(e){
    document.removeEventListener("mouseover",function(e){

    })
}

function showmessage(e){
    if (pop === 28){
        container.classList.add("active")
        show.classList.add("active")

    }

}