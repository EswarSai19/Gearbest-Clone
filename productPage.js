// var recData = [
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v3/ff82bcbc4ead.jpg",
//         name : "Samebike 20LVXD30 350W Foldable Electric",
//         price : "$699.00",
//         stPrice:"$899.99",
//         percentage : "25% Off",
//     },
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v3/9ddd43b06de2.jpg",
//         name : "FIIDO D2S Folding Moped Electric Bike",
//         price : "$629.00",
//         stPrice:"$699.99",
//         percentage : "10% Off",
//     },
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16432/goods_img-v3/d7e0c670df9b.jpg",
//         name : "ENGWE EP-2 PRO Folding Electric Bike",
//         price : "$1059.00",
//         stPrice:"$1099.99",
//         percentage : "4% Off",
//     },
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16457/goods_img-v1/5b3b40b11446.jpg",
//         name : "FIIDO D3 Pro Folding Electric Moped Bike 14",
//         price : "$569.00",
//         stPrice:"$699.99",
//         percentage : "19% Off",
//     },
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_img-v1/4237ee2cab54.jpg",
//         name : "EU/US Stock ENGWE EP-2PRO 20inch Fat Tire",
//         price : "$1060.00",
//         stPrice:"$2120.99",
//         percentage : "50% Off",
//     },
//     {
//         background_image:"https://gloimg.gbtcdn.com/soa/gb/store/6898996771574444032/16474/goods_img-v1/fb5e1941c923.jpg",
//         name : "Samebike SY26 26inch 350W Electric Bike 36V",
//         price : "$839.00",
//         stPrice:"$899.99",
//         percentage : "12% Off",
//     },

// ];

// recData.map(function(el){
//     var bcimg = document.querySelector("class","img_div")
//     bcimg.style.backgroundImage = "url(" +recData[el.background_image] + ")"
//     bcimg.innerText = el.background_image;
//     bcimg.style.backgroundSize = "200px"
//     bcimg.style.backgroundRepeat = "no-repeat"
//     bcimg.style.height = "200px"
//     var percent = document.querySelector("class","per_off")
//     percent.innerText = el.percentage;
//     var name = document.querySelector("class","name")
//     name.innerText = el.name;
//     var price = document.querySelector("class","pr")
//     price.innerText = el.price;
//     var stprice = document.querySelector("class",'sr')
//     stprice.innerText = el.stPrice;
//    console.log(bcimg,percent,name,price,stprice);
//     document.querySelector("class","inneritems").append(percent,name,price,stprice);
// })



// counter for products

var counter;
// console.log(localStorage.getItem("counterNum",counter))
if(localStorage.getItem("counterNum",counter)==null){
    counter = 1;
}else{
    counter = localStorage.getItem("counterNum",counter);
}
document.querySelector(".value").innerText = counter;
console.log(counter)
document.querySelector(".adding").addEventListener("click",incFun);
function incFun(){
    counter++;
    localStorage.setItem("counterNum",counter);
    document.querySelector(".value").innerText = counter;
   
    
}

document.querySelector(".substract").addEventListener("click",decFun);

    function decFun(){
        counter--;
        localStorage.setItem("counterNum",counter);
        document.querySelector(".value").innerText = counter;
    }



// counter part ended

var suggestedProductsData = [
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/07/goods_img-v1/20171107170824_66872.jpg",
        name : "Samebike 20LVXD30 350W  Electric...",
        price : "$759.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/10/goods_img-v1/20181110110203_97093.jpg",
        name : "Solar Charging Panel Removable Folding...",
        price : "$29.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/16/goods_img-v1/20190916110631_93969.jpg",
        name : "WalkingPad C1  Walking Machine...",
        price : "$443.50"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/13/goods_img-v1/20181113181627_76689.jpg",
        name : "Gocomma 021 Liner Lock Folding Knife...",
        price : "$7.59"
    },
    {
        img : "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/16/goods-img/1505673733451316354.jpg",
        name : "Universal Bicycle Flashlight Mount Clip...",
        price : "$2.99"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/17/goods_img-v2/20200717105920_5f11140840070.jpg",
        name : "Fully  Steering Brake Tail Light Flasher...",
        price : "$15.33"
    },
];

displaySuggestProducts(suggestedProductsData)
function displaySuggestProducts(suggestedProductsData){
    suggestedProductsData.map(function(el){
        var box = document.createElement("div")
        box.setAttribute("class","spbox")
     
        
        var imgbox = document.createElement("div")
        imgbox.setAttribute("class","spimgbox")
        var image = document.createElement("img");
        image.setAttribute("class","spimage")
        image.src = el.img
        imgbox.append(image)
    
        var price = document.createElement("p");
        price.setAttribute("class","spprice")
        price.innerText = el.price;
    
    
        var name = document.createElement("p")
        name.setAttribute("class","spname")
        name.innerText = el.name;
    
        
        box.append(imgbox,name,price);
        console.log(box)
        document.querySelector(".container").append(box)
    
    })
}

var sponsoredProductsData = [
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_img-v1/d2274aa5b42c.jpg",
        name : "ENGWE Bike C20 PRO Electric Bike...",
        price : "$1999.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_img-v1/9cddbe59a65e.jpg",
        name : "ENGWE Bike C20 20inch  Electric Bike...",
        price : "$1299.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16481/goods_img-v1/6c2275ad7c3c.jpg",
        name : " Wiha Zai Hause  Repair Tool Set...",
        price : "$50.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6901892192051326976/16476/goods_img-v1/d629e2547919.jpg",
        name : " Infant Seat Circle  Sitting Circle Unicorn...",
        price : "$26.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6901892192051326976/16476/goods_img-v1/c9ae8f76106a.jpg",
        name : " Sunshade Car Boat Sun  Seat Baby...",
        price : "$28.00"
    },
    {
        img : "https://gloimg.gbtcdn.com/soa/gb/item/6898296044149469184/16476/goods_img-v1/f2e8034b5e3f.jpg",
        name : "  Mini2  Skateboard with Remo...",
        price : "$469.00"
    },
];
displaySponsoredProducts(sponsoredProductsData);
function displaySponsoredProducts(sponsoredProductsData){
  
    
    sponsoredProductsData.map(function(el){
        var box = document.createElement("div")
        box.setAttribute("class","spbox1")
     
        
        var imgbox = document.createElement("div")
        imgbox.setAttribute("class","spimgbox1")
        var image = document.createElement("img");
        image.setAttribute("class","spimage1")
        image.src = el.img
        imgbox.append(image)
    
        var price = document.createElement("p");
        price.setAttribute("class","spprice1")
        price.innerText = el.price;
    
    
        var name = document.createElement("p")
        name.setAttribute("class","spname1")
        name.innerText = el.name;
    
        
        box.append(imgbox,name,price);
        console.log(box)
        document.querySelector(".container1").append(box)
    
    })
}
