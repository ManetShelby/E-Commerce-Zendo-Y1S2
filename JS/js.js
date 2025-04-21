// img show
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

// size/Quantity
let btns = document.getElementById("btns");
    let btnm=document.getElementById("btnm");
    let btnl=document.getElementById("btnl");
    btns.addEventListener("click", seS);
    function seS(){
        btns.className="b_1";
        btnm.className="";
        btnl.className="";

    }
    function selectdM(){
        btnm.className="b_1";
        btns.className="";
        btnl.className="";
        
    }
    function selectdl(){
        btnl.className="b_1";
        btnm.className="";
        btns.className="";
    }


    let btnD=document.getElementById("btnD");
    let btnN=document.getElementById("btnN");
    let btnI=document.getElementById("btnI");

    function fnI(){
        if(btnN.innerText < 10){
            btnN.innerText=parseInt(btnN.innerText) + 1;

        }
    }
    function fnD(){
        if(btnN.innerText > 1){
            btnN.innerText=parseInt(btnN.innerText) - 1;
        }
    }