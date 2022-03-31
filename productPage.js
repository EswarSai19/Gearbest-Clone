var recData = [
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v3/ff82bcbc4ead.jpg",
        name : "Samebike 20LVXD30 350W Foldable Electric",
        price : "$699.00",
        stPrice:"$899.99",
        percentage : "25% Off",
    },
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v3/9ddd43b06de2.jpg",
        name : "FIIDO D2S Folding Moped Electric Bike",
        price : "$629.00",
        stPrice:"$699.99",
        percentage : "10% Off",
    },
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16432/goods_img-v3/d7e0c670df9b.jpg",
        name : "ENGWE EP-2 PRO Folding Electric Bike",
        price : "$1059.00",
        stPrice:"$1099.99",
        percentage : "4% Off",
    },
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16457/goods_img-v1/5b3b40b11446.jpg",
        name : "FIIDO D3 Pro Folding Electric Moped Bike 14",
        price : "$569.00",
        stPrice:"$699.99",
        percentage : "19% Off",
    },
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_img-v1/4237ee2cab54.jpg",
        name : "EU/US Stock ENGWE EP-2PRO 20inch Fat Tire",
        price : "$1060.00",
        stPrice:"$2120.99",
        percentage : "50% Off",
    },
    {
        background_image:"https://gloimg.gbtcdn.com/soa/gb/store/6898996771574444032/16474/goods_img-v1/fb5e1941c923.jpg",
        name : "Samebike SY26 26inch 350W Electric Bike 36V",
        price : "$839.00",
        stPrice:"$899.99",
        percentage : "12% Off",
    },

];

recData.map(function(el){
    var bcimg = document.querySelector("class","img_div")
    bcimg.style.backgroundImage = "url(" +recData[el.background_image] + ")"
    bcimg.innerText = el.background_image;
    bcimg.style.backgroundSize = "200px"
    bcimg.style.backgroundRepeat = "no-repeat"
    bcimg.style.height = "200px"
    var percent = document.querySelector("class","per_off")
    percent.innerText = el.percentage;
    var name = document.querySelector("class","name")
    name.innerText = el.name;
    var price = document.querySelector("class","pr")
    price.innerText = el.price;
    var stprice = document.querySelector("class",'sr')
    stprice.innerText = el.stPrice;
   console.log(bcimg,percent,name,price,stprice);
    document.querySelector("class","inneritems").append(percent,name,price,stprice);
})