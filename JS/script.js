var allProducts = document.querySelectorAll(".card button");
var productTitle = document.querySelector('.card-title');
var content = document.querySelector("#yourProducts");
var btn = document.querySelector("#btn1");
var btnPrice = document.querySelector("#btn2");
var totalContent = document.querySelector("#totalPrice")
var total = document.querySelector("#totalPrice h3 span ")
var cart = document.querySelector(".cart")
var totalPrice = 0;
var num =1;

allProducts.forEach( function (item){
    item.onclick = function (){
        // console.log("ss")
        cart.style.display ="block"
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML +=  "<b>" + num + "-" + item.getAttribute("title") + "</b>" +"<br>"  
        if (content.innerHTML != ""){
            btnPrice.style.display = "block"
        }
        num++;

        
    }
})

btnPrice.onclick = function (){
    totalContent.style.display = "block"
    total.innerHTML = totalPrice;
   }
