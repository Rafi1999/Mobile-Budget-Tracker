// calculate realme chocolate price with quantity
// document
//   .getElementById("realme-buy-btn")
//   .addEventListener("click", function () {
//     const realmeCost = multiplePriceWithQuantity("realme-quantity", 200);
//     setInnerText("chocolate", realmeCost);
//     document.getElementById("realme-quantity").value = "";
//     total();
//   });

function handlerealme() {
  const realmeCost = multiplePriceWithQuantity("realme-quantity", 20000);
  setInnerText("realme", realmeCost);
  document.getElementById("realme-quantity").value = "";
  total();
}
// calculate rose  price with quantity
document.getElementById("poco-buy-btn").addEventListener("click", function () {
  const pocoCost = multiplePriceWithQuantity("poco-quantity", 25000);
  setInnerText("poco", pocoCost);
  document.getElementById("poco-quantity").value = "";
  total();
});
// calculate diary  price with quantity
document.getElementById("iqo-buy-btn").addEventListener("click", function () {
  const iqoCost = multiplePriceWithQuantity("iqo-quantity", 30000);
  setInnerText("iqo", iqoCost);
  document.getElementById("iqo-quantity").value = "";
  total();
});
function total(params) {
  const realme = stringToNumberConverter("realme");
  const poco = stringToNumberConverter("poco");
  const iqo = stringToNumberConverter("iqo");
  const total = realme + poco + iqo;
  setInnerText("total", total);
}
// pass the id of the tag this function will convert just innertext to number
function stringToNumberConverter(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}
// this function will take id & value of tag and set innertext
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// this fucntion will calculate the quatity and price of gift this fucntion will take two parameter inutField id & price of gift
function multiplePriceWithQuantity(id, price) {
  const quantity = document.getElementById(id).value;
  const totalPrice = parseInt(quantity) * parseInt(price);
  return totalPrice;
}

function handlePromoCode(params) {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode == "101") {
    const total = stringToNumberConverter("total");
    setInnerText("all-total", total - total * 0.1);
  } else {
    alert("promo code is not correct");
  }
}
