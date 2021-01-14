let spanFun = document.querySelectorAll(`span`)



for (let z=0; z < spanFun.length; z++){
    let spanFuninator = function(){
        let r = Math.random() * 200 + 75 
        let g = Math.random() * 200 + 75 
        let b = Math.random() * 200 + 75
        spanFun[z].style.color = `rgb(${r}, ${g}, ${b})`
        spanFun[z].style.transition = `color 2s`
    }
    setInterval(spanFuninator, 420)
}
