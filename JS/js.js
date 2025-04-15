let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let SelectedImg=document.getElementById("select_img");

img1.addEventListener("click",Selectimg1);
img2.addEventListener("click",Selectimg2);
img3.addEventListener("click",Selectimg3);
img4.addEventListener("click",Selectimg4);

function Selectimg1(){
    SelectedImg.src=img1.src; 
}
function Selectimg2(){
    SelectedImg.src=img2.src; 
}
function Selectimg3(){
    SelectedImg.src=img3.src; 
}
function Selectimg4(){
    SelectedImg.src=img4.src; 
}