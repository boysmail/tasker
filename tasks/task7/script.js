setInterval(function() {
    movejs()
}, 50);

function select(id){
    var bunny = document.getElementsByClassName("bunny")[id]
    if (bunny.classList.contains("selected")){
        //bunny.classList.add("move")

        bunny.classList.add("movejs")
    }
    else {
        bunny.style.backgroundImage = "url(\"images/run.PNG\")"
        bunny.style.width= "200px"
        bunny.innerHTML += "<h2>Выбрали</h2>"
        bunny.classList.add("selected")
    }
}

function movejs(){
    var bunny = document.getElementsByClassName("movejs")
    for (const bun of bunny) {
        let s = bun.style.left.slice(0,-2) / 10
        if (s === 0){
            s=1
        }

        if (s>50){
            bun.classList.remove("movejs")
        }
        s++
        bun.style.left=10*s+"px"

    }
}
