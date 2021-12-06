let shop = document.createElement("div");
shop.setAttribute("id","shop");
let itm = document.createElement("div");
itm.setAttribute("id","itm");
let cart = document.createElement("div");
cart.setAttribute("id","cart");

let tot = document.createElement("div");
tot.setAttribute("id","tot");


let itmList = [
    {name : "I-phone 11 pro",
    img : "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fhzhzzh5s.jpeg?q=70",
    price : "48,999"},
    {name : "One-plus 8T",
    img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUYF3iFlh9-U6Wi9BA2-W2LU66z9zy9krz3nQD0jhBIarGoLSQK5mS9X-6tpP8_0aFju96WI62oA&usqp=CAc",
    price : "38,999"},
    {name : "Redmi 10 pro",
    img : "https://m.media-amazon.com/images/I/81aQWPoGdOL._SL1500_.jpg",
    price : "19,999"},
    {name : "Realme XT",
    img : "https://m.media-amazon.com/images/I/71cbZLek0JL._AC_UY218_.jpg",
    price : "17,999"},
    {name : "Samsung Galaxy note 20",
    img : "https://m.media-amazon.com/images/I/81+Zx6troaL._AC_UY218_.jpg",
    price : "44,999"},
    {name : "Google pixel 4a",
    img : "https://m.media-amazon.com/images/I/71tkGDmhN3L._AC_UY218_.jpg",
    price : "27,999"}
];
var val = 0;
itmList.forEach(element=>{
    let box = document.createElement("div");
    box.setAttribute("class","box");
    let image = document.createElement("img");
    image.src = element.img;
    let na = document.createElement("div");
    na.innerHTML = `Product Name : ${element.name}`;
    let pr = document.createElement("div");
    pr.innerHTML = `Price : ${element.price}`;
    var but = document.createElement("button");
    but.innerHTML = `Add to cart`;
    box.appendChild(image);
    box.appendChild(na);
    box.appendChild(pr);
    box.appendChild(but);
    itm.appendChild(box);
    but.addEventListener('click',()=>{
    
        let pri = document.createElement("div");
        pri.setAttribute("id","pri");
        
        pri.innerHTML = ` ${element.name} : ${element.price} <button id = "close">Remove</button><hr><br>`;
        
        cart.appendChild(pri);
        let v = element.price.split("");
        
        v.splice(2,1,"");
        var r = parseInt(v.join(""));
        val += r;
        tot.innerHTML =`total : ${val}` ;
        document.getElementById("close").addEventListener('click',()=>{
            
            let v1 = element.price.split("");
        
            v1.splice(2,1,"");
            var r1 = parseInt(v1.join(""));
            val1 = val - r1;
            tot.innerHTML =`total : ${val1}`;
            console.log(r1);
            console.log(val1);
            console.log(v1);
            cart.appendChild(tot);
        });  
       
       cart.appendChild(tot); 
    })

    
});


shop.appendChild(itm);
shop.appendChild(cart);

document.body.appendChild(shop);

