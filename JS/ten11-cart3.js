
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


let selectedId="XS";
function selected_size(button) {
    selectedId = button.innerText;  // You can use this ID however you want
}
// rotine-cart1
let ten113=10.07;
let Deliveryfee=1.25;
let ShowImg=("img").src;
let Amountpay= ten113+Deliveryfee;
let btnadd=document.getElementById("btnAdd");
btnadd.addEventListener("click", add_to_cart);
function add_to_cart(){
    let quantity = new Object();
    quantity.btnN=btnN.innerText;
    quantity.selectedId=selectedId;
    quantity.ShowImg=img0.src;
    quantity.price=ten113;
    quantity.Amountpay=Amountpay;

    
    

    console.log(quantity);

    let cartOutput = document.getElementById("cartOutput");
    cartOutput.innerHTML = `

    <div class="cart-container">
  <div class="cart-item">
    <div class="cart-image">
      <img src="${quantity.ShowImg}" alt="Mesh Jersey T-Shirt">
    </div>
    <div class="cart-details">
      <h3>Mesh Jersey T-Shirt</h3>
      <p class="product-code">Regular Fitted T-Shirts</p>
      <div class="size-quantity">
        <div>
        ${quantity.selectedId}
        </div>
        <div>
        ${quantity.btnN}
        </div>
      </div>
      <div class="cart-actions">
        <span class="move-wishlist">♡ Move to wishlist</span>
        <span class="delete-item">🗑️</span>
      </div>
      <div class="price">
        ${quantity.price}$
      </div>
    </div>
  </div>

  <div class="cart-summary">
    <div class="summary-row">
      <span>Total</span>
      <span>US $${quantity.price}</span>
    </div>
    <div class="summary-row">
      <span>Save</span>
      <span>US $0</span>
    </div>
    <div class="summary-row">
      <span>Delivery fee</span>
      <span>US $1.25</span>
    </div>
    <hr>
    <div class="summary-row total-pay">
      <span>Amount to pay</span>
      <span>US $${quantity.Amountpay}</span>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
</div>
    `;
}