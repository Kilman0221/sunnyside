let hamburger=document.querySelector(".menu");
let menu=document.querySelector("#hmenu");

hamburger.addEventListener('click', ()=>{
    
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        menu.classList.add("unactive");
        hamburger.style.transform="rotate(0deg)";
    }
    else{
        menu.classList.remove("unactive");
        menu.classList.add("active");
        hamburger.style.transform="rotate(90deg)";
    }
    
})