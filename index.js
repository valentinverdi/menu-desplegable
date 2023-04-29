const divRot = document.querySelector(".divrot");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const circulo = document.querySelector(".circle");
const rayas = document.querySelector(".rayas");
const cruz = document.querySelector(".cruz");

rayas.addEventListener("click",()=>{
    divRot.style.transform = "rotate(-20deg)";
    circulo.style.transform = "rotate(-90deg)";
    setTimeout(()=> li1.style.transform = "translateX(0px)", 300) 
    setTimeout(()=> li2.style.transform = "translateX(20px)", 350) 
    setTimeout(()=> li3.style.transform = "translateX(40px)", 400) 
})

cruz.addEventListener("click",()=>{
    divRot.style.transform = "rotate(0deg)";
    circulo.style.transform = "rotate(0deg)";
    setTimeout(()=> li1.style.transform = "translateX(-176px)", 64) 
    setTimeout(()=> li2.style.transform = "translateX(-176px)", 34) 
    setTimeout(()=> li3.style.transform = "translateX(-176px)", 0)
})