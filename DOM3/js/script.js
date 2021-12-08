let box=document.getElementById("box-info")
let ul =document.querySelectorAll(".list-group li")


console.log(ul)
let textForLi;

ul.forEach(x=>x.ondragstart=function(e){
    textForLi=this.innerHTML
    console.log(textForLi)
}) 

box.ondragover=function(e){
    e.preventDefault()
}
box.ondrop=function(e){
    let p = document.createElement("p")
    p.innerHTML=textForLi
    p.style.color="red";
    box.appendChild(p)
}