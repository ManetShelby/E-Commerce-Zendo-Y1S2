let btnxs = document.getElementById("btnxs");
let btns = document.getElementById("btns");
let btnm = document.getElementById("btnm");
let btnl = document.getElementById("btnl");
let btnxl = document.getElementById("btnxl");
function fnxs() {
    btnxs.className = "border";
    btns.className = "size";
    btnm.className = "size";
    btnl.className = "size";
    btnxl.className = "size";
}
function fns() {
    btnxs.className = "size";
    btns.className = "border";
    btnm.className = "size";
    btnl.className = "size";
    btnxl.className = "size";
}
function fnm() {
    btnxs.className = "size";
    btns.className = "size";
    btnm.className = "border";
    btnl.className = "size";
    btnxl.className = "size";
}
function fnl() {
    btnxs.className = "size";
    btns.className = "size";
    btnm.className = "size";
    btnl.className = "border";
    btnxl.className = "size";
}
function fnxl() {
    btnxs.className = "size";
    btns.className = "size";
    btnm.className = "size";
    btnl.className = "size";
    btnxl.className = "border";
}