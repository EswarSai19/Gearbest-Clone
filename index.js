
// middle part js start here
products = [
    {
    img : "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16469/goods_img-v1/2c104688ae40.jpg" ,
    name : "Original Xiaomi Smart Weight Scale 2 Health Weighting " ,
    price : "$18.99"
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
      name : "Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone",
      price : "$16.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16427/goods_img-v1/1993a3019ba8.jpg",
      name : "Roborock S7 Robot Vacuum Cleaner ",
      price : "$766.00",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/store/6897837697235349504/16461/goods_img-v3/26e44cfc0b88.jpg",
      name : "KUU YOBOOK M Intel Celeron N4020 13.5-inch ",
      price : "$283.68",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img-v1/95fca3c5272a.jpg",
      name : "Xiaomi Mi 11 Lite 5G NE Smartphone",
      price : "$349.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16420/goods_img-v1/004ea00b29bc.jpg",
      name : "Xiaomi Mijia Night Light 2 Bluetooth Version Adjustable",
      price : "$15.66",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16467/goods_img-v1/a5d8052a554c.jpg",
      name : "ONEBOT S6 Electric Bike Folding Bicycle 250W 50km Mileage",
      price : "$849.00",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v3/4b0ffdc40949.jpg",
      name : "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth",
      price : "$7.55",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6905960412823613440/16481/goods_img-v1/602c0a08c48f.jpg",
      name : "Teclast P20HD Android Tablets Android 10 OS",
      price : "$159.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/store/6900783172733300736/16468/goods_img-v1/028da765e53c.jpg",
      name : "Global Version Xiaomi Redmi 10 Smartphone ",
      price : "$161.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16415/goods_img-v1/3dd9f4b0308c.jpg",
      name : "Original Xiaomi ENCHEN Boost USB Electric Hair Clippers",
      price : "$14.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6901962188706213888/16473/goods_img-v5/2f6731bcaf17.jpg",
      name : "New Smartwatch 2022 KOSPET TANK M1",
      price : "$54.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/store/6900783172733300736/16468/goods_img-v1/e483ba511256.jpg",
      name : "Global Version Xiaomi Redmi Note 10 5G Smartphone ",
      price : "$209.99",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16414/goods_img-v3/66f09d0cac15.jpg",
      name : "L900 PRO 5G WIFI FPV Foldable GPS RC Drone",
      price : "$94.73",  
    },
    {
      img : "https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v3/a51264761aa3.jpg",
      name : "ENGWE Bike C20 PRO Adult Electric Bike 36V19.2AH ",
      price : "$975.00",  
    },
]

products.map(function(ele){
  var box = document.createElement("div");
  var img = document.createElement("img");
  img.src = ele.img;
  img.setAttribute("class","middleImg")
  var name = document.createElement("p");
  name.innerText = ele.name;
  
  var price = document.createElement("p");
  price.setAttribute("class","price")
  price.innerText = ele.price;
  var discount = document.createElement("div");
  discount.innerText = "25% off"
  discount.setAttribute("class","gbItem_discount");
  box.append(discount,img,name,price);
  document.querySelector(".recommeded").append(box);
})
// middle part js end here 


// top part js start here

var catdata=[
  {name:"Consumer Electronics"},
  {name:"Industrial & Scientific"},
  {name:"Cell Phones & Accessories"},
  {name:"Appliances"},
  {name:"Outdoor, Fitness & sports"},
  {name:"Computers,Tables & Offic"},
  {name:"Health & Personal Care"},
  {name:"Home & Personal Care"},
  {name:"Home Improvement & Tools"},
  {name:"Drones, Toys & Hobbies"},
  {name:"Home & Garden"},
  {name:"Motor & Car Electronics"},
  {name:"Mens Fashion"},  
  {name:"Womens & Jwellery"},
  {name:"Gearbest Promotion"},
  
  ];

  catdata.map(function(ele){
     var name= document.createElement("div")
     name.innerText=ele.name;

     document.querySelector("#category").append(name)
  })
//  document.querySelector("#service").addEventListener("mouseenter")

 
//  top part js end here