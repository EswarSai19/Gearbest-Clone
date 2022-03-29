var arrOfProductat = [
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16485/goods_thumb_220-v1/69ca618dbb90.jpg" ,
        productName : "Q2 Portable Mini Projector Home Theater System",
        prodctPrice : "68.99",
        prodctCategory : "Electronics"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16485/goods_thumb_220-v1/6775256dea82.jpg",
        productName : "HUINA 1572 2.4GHz 15CH RC Crawler Crane Vehicle Toy",
        prodctPrice : "81.99",
        prodctCategory : "Toys"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16485/goods_thumb_220-v2/ced075b4cb37.jpg",
        productName :"Samebike 20LVXD30 350W Foldable Electric Bike",
        prodctPrice :"759.00",
        prodctCategory : "Sports"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16483/goods_thumb_220-v1/3a3e1e97f671.jpg",
        productName : "Xiaomi Vacuum Cleaner Handheld Portable",
        prodctPrice :"179.99",
        prodctCategory :"Appliances"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16485/goods_thumb_220-v1/e98aa5ab264b.jpg",
        productName :"Xiaomi X4 Pro 5G Smartphone Telephone",
        prodctPrice :"319.99",
        prodctCategory :"Smartphones"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16483/goods_thumb_220-v1/b0ada42e0c79.jpg",
        productName : "Electric Inflator Air Pump Compressor for Bike Motorcycle",
        prodctPrice : "41.99",
        prodctCategory : "Appliances"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16482/goods_img_big-v1/e7f1547ea9b9.jpg",
        productName :"Xiaomi Lofans B3 Refrigerator Deodorizer",
        prodctPrice :"25.99",
        prodctCategory : "Electronics"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16483/goods_thumb_220-v1/25992928e2cd.jpg" ,
        productName : "Xiaomi Mijia Electric Shaver S700 Razor Beard Machine",
        prodctPrice :"299.99",
        prodctCategory : "Appliances"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6901892192051326976/16485/goods_thumb_220-v1/d15590fce763.jpg",
        productName : "Double Folding Keyboard Wireless Bluetooth",
        prodctPrice : "45.99",
        prodctCategory : "Electronics"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16485/goods_thumb_220-v1/10239a115cec.jpg",
        productName : "HUINA 1560 2.4Ghz RC Drill Excavator Demolition Machine",
        prodctPrice : "81.99",
        prodctCategory : "Toys"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16473/goods_thumb_220-v1/5198595d2496.jpg",
        productName : "SAMEBIKE JG20 Electric Bike 10 ah 350W",
        prodctPrice : "799.00",
        prodctCategory : "Sports"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16481/goods_thumb_220-v1/1093a12ce559.jpg",
        productName : "AVAKA BZ20 Electric Bike Electric Bike 500W Motor",
        prodctPrice : "1099.99",
        prodctCategory : "Sports"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16483/goods_thumb_220-v1/93c37a8c4909.jpg",
        productName : "ASLING Metal Ring Series TPU Soft Back Cover Phone Case",
        prodctPrice : "7.99",
        prodctCategory : "Smartphones"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6901892192051326976/16485/goods_thumb_220-v1/2c7b1016e754.jpg",
        productName : "Ultra-thin Wireless Tri-fold Keyboard Cell Phone ",
        prodctPrice : "48.99",
        prodctCategory : "Computer"
    },
    {
        productImageUrl : "https://gloimg.gbtcdn.com/soa/gb/item/6901892192051326976/16485/goods_thumb_220-v1/307078382388.jpg",
        productName : "Numeric Keypad Small Keyboard Multifunction",
        prodctPrice : "35.00",
        prodctCategory : "Computer"
    }
];

window.addEventListener("load", function(){
    displayProduct(arrOfProductat)
})
function displayProduct(arr){
    arr.map(function (ele){
        var div = document.createElement("div")
        var imgDiv = document.createElement("img");
        imgDiv.className = "NewProduct-center-img"
        imgDiv.setAttribute("src", ele.productImageUrl);
        

        var pdiv = document.createElement("p");
        pdiv.className = "NewProduct-center-p"
        pdiv.innerText = ele.productName;

        var priceDiv = document.createElement("div");
        priceDiv.className = "NewProduct-center-priceDiv";

        var price = document.createElement("p");
        price.append(innerText ="$", innerText = ele.prodctPrice);

        var heart = document.createElement("i")
        heart.className = "fa-regular fa-heart";

        priceDiv.append(price, heart);
        div.append(imgDiv, pdiv, priceDiv);
        document.querySelector(".NewProduct-center").append(div)
    });
}