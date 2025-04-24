// Quantity
let btnd = document.getElementById("btnd");
        let btnN = document.getElementById("btnN");
        let btnI = document.getElementById("btnI");

        function fnIc() {
            if (parseInt(btnN.innerText) < 10) {
                btnN.innerText = parseInt(btnN.innerText) + 1;
            }
            else {
                alert("You Are poor so we dont we approve more than 10 LoL");
            }
        }
        function fnDc() {
            if (parseInt(btnN.innerText) > 1) {
                btnN.innerText = parseInt(btnN.innerText) - 1;
            }
        }
// img show
let show = document.getElementById("show");
let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
function fnimg0() {
    show.src = img0.src;
    img0.className = "imaborder";
    img1.className = "";
    img2.className = "";
    img3.className = "";
}
function fnimg1() {
    show.src = img1.src;
    img0.className = "";
    img1.className = "imaborder";
    img2.className = "";
    img3.className = "";

}
function fnimg2() {
    show.src = img2.src;
    img0.className = "";
    img1.className = "";
    img2.className = "imaborder";
    img3.className = "";
}
function fnimg3() {
    show.src = img3.src;
    img0.className = "";
    img1.className = "";
    img2.className = "";
    img3.className = "imaborder";
}

