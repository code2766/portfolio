let about = document.querySelector("#ab")
let bod = document.querySelector("body")
let img = document.querySelector("#img")
let abo = document.querySelector("#about")
let hom = document.querySelector("#home")
let nav = document.querySelector("#navbar")
let cont = document.querySelector("#cont")
img.addEventListener("click",function ee(){
    //   
    if(img.getAttribute("src")=="images/PXL_20230709_081321280~2.jpg"){
        img.setAttribute("src","images/PXL_20230710_092441945.PORTRAIT.ORIGINAL~2.jpg")
    }else if (img.getAttribute("src")=="images/PXL_20230710_092441945.PORTRAIT.ORIGINAL~2.jpg"){
        img.setAttribute("src","images/PXL_20230709_081321280~2.jpg")
    }
})
let y = abo.offsetTop - nav.clientHeight
about.addEventListener("click",function ef (){
    window.scrollTo({
        top:y,
        behavior:"smooth"
    })
})

hom.addEventListener("click",function ws(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

let ins = document.querySelector("#ins")
let git = document.querySelector("#git")
let x = document.querySelector("#x")

ins.addEventListener("click",function ew(){
    window.location.href="https://www.instagram.com/sanskar2766_/"
})
git.addEventListener("click",function cdc(){
    window.location.href="https://github.com/code2766"
})
x.addEventListener("click",function dd(){
    window.location.href="#"
})

cont.addEventListener("click",function wwwww(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
})


let procard = document.querySelector(".card")

procard.addEventListener("click",function ddf(){
    window.location.href = "https://code2766.github.io/tictactoe/"
})