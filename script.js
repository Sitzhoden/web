let haupt = document.querySelector(".haupt")

let info = document.querySelector(".info")

let team =document.querySelector(".team")

function clickstart(){
    haupt.classList.remove('hide')
    info.classList.add('hide') 
    team.classList.add("hide")
}

function clickdev(){
    info.classList.remove('hide')
    haupt.classList.add('hide') 
    team.classList.add("hide")
}
function clickteam(){
    team.classList.remove("hide")
    haupt.classList.add('hide')
    info.classList.add('hide')
}

