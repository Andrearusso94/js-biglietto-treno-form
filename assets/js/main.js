/*//km da percorrere
const nKm = Number < 100000;
console.log(nKm);

//età viaggiatore
const age = document.getElementById("age");
console.log(age);


// prezzo * Km
const price = nKm * 0.21;
console.log(price);

// sconti  
 let finalPrice;
 const discountValueUnder = (price / 100)* 20;
 const discountValueOver = (price/100)* 40;
 
 

 //prezzi scontati
if (age < 18) {
 finalPrice = price - discountValueUnder;
 console.log(finalPrice)
} else if (age > 65) {
   finalPrice = price - discountValueOver;
   console.log(finalPrice)
} else  {
    finalPrice = price
    console.log("Non si applica nessuno sconto", finalPrice);
}*/




const buttonGenerator = document.getElementById("go");

buttonGenerator.addEventListener("click", function(){
  const myUser = document.getElementById("user").value;
  const nKm = document.getElementById("nKm").value;


//età viaggiatore
const age = document.getElementById("age").value;



// prezzo * Km
const price = nKm * 0.21;


// sconti  
 let finalPrice;
 const discountValueUnder = (price / 100)* 20;
 const discountValueOver = (price/100)* 40;
 
 

 //prezzi scontati
if (age < 18) {
 finalPrice = price - discountValueUnder;
 console.log(finalPrice)
} else if (age > 65) {
   finalPrice = price - discountValueOver;
   console.log(finalPrice)
} else  {
    finalPrice = price
    console.log("Non si applica nessuno sconto", finalPrice);
}

let myMessage =  `${myUser} Questo è il prezzo del tuo biglietto:€ ${finalPrice.toFixed(2)}`
document.getElementById("demo").innerHTML = myMessage;
})

