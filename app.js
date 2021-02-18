function infoToggle(){
    var x = document.getElementById("info1");
    var slideCont=document.getElementsByClassName("container");
    var disBodyActive=document.querySelector(".container");
    x.classList.toggle("infoActive");
   
    disBodyActive.classList.toggle("disBody");
}
function infoToggle2(){
    var x = document.getElementById("info2");
    var disBodyActive=document.querySelector(".container");
    x.classList.toggle("infoActive");
   
    disBodyActive.classList.toggle("disBody");
}
function infoToggle3(){
    var x = document.getElementById("info3");
    var disBodyActive=document.querySelector(".container");
    x.classList.toggle("infoActive");
   
    disBodyActive.classList.toggle("disBody");
}

/*_____________________________body_Card___________________________*/


var prevScrollpos =window.pageYOffset;
window.onscroll= function(){
    var currentScrollPos=window.pageYOffset;
    if(prevScrollpos>currentScrollPos ){
        document.getElementById("navBar").style.top=0;
       
    }else{
        document.getElementById("navBar").style.top="-100px";
        
    }
    prevScrollpos=currentScrollPos;
}