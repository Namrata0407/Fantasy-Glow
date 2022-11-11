

let arr = ["https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"]
let empArr = document.createElement('img');
let i = 0;
empArr.src = arr[i];


let imgApp = document.querySelector('#midimg');
imgApp.append(empArr);

let imgintervel =  setInterval(function(){

   if(i===arr.length){
       i=0;
   }

   empArr.src = arr[i];
   console.log(i);
   i++;
},1000)


// ,,,,,,,,,,,,,,,,,,,<<<<<<<<<<<<<<<<<<<<<<<<<<<forimgdiv>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


let data = [

    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001565-1.jpg",
        title: "Aroma Magic Activated Bamboo Charcoal Face Wash",
        price:  210.00, 
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001368-2.jpg",
        title: "Head & Shoulders Anti-Dandruff Anti Hair Fall Shampoo - (340ml)",
        price:  285.00, 
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/g/g/ggggghh.jpg",
        title: "Himalaya Herbals Anti-Wrinkle Cream - Pack Of 2",
        price: 200.00, 
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/_/1/.111.jpg",
        title: "Himalaya Herbals Purifying Neem Foaming Face Wash - Pack Of 2",
        price:  423.00, 
    },
    // {
    //     image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-1_4.jpg",
    //     title: "Joy Even Tone Bright Radiance Skin Brightening Body Lotion - Get Free NIVEA Deodorant Roll On - Pearl & Beauty",
    //     price:  295.00, 
    // },
    // {
    //     image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/u/n/untitled-1_5_1.jpg",
    //     title: "Kamasutra Spark Deodorant Spray For Men (Buy 1 Get 1 Free) - 260ml Each",
    //     price:  299.00, 
    // },
    // {
    //     image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/9/8901526102655_2bbb.jpg",
    //     title: "L'Oreal Paris Fall Resist 3X Anti-Hairfall Shampoo (704ml)",
    //     price:  405.00, 
    // },
    // {
    //     image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001708-22.jpg",
    //     title: "Livon Serum Damage Protection Mild Fragrance Vitamin - E",
    //     price:  213.00, 
    // },
];


 function appendItem(){
    data.forEach(function(el,i){
        console.log(el.title,el.price)

        let div1 = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src',el.image);

        let title = document.createElement('p');
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = "₹" + el.price;

        let add = document.createElement('button');
        add.innerText = "Add to cart";

        div1.append(img,title,price,add);
        document.querySelector('#mid-banner-2').append(div1)

    })
 }

appendItem();


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<          mid-banner-5             >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let data1 = [

    {
        image1: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_1.jpg",
        title1: "Miss Claire Blusher Kit - 3660-B-3",
        price1:  410.00, 
    },
    {
        image1: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/7/3732f778903487000209_1.jpg",
        title1: "Miss Claire Eyeshadow Kit - 3716-11-3",
        price1:  395.00, 
    },
    {
        image1: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/d/bdd30238903487002319_1.jpg",
        title1: "Miss Claire M20 - Pointed Blending",
        price1:  375.00, 
    },
    {
        image1: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/1/610f0238903487002296_1.jpg",
        title1: "Miss Claire M19 - Eyeshadow Blending",
        price1:  375.00, 
    },
];


function appendItem1(){
    data1.forEach(function(el,i){
        console.log(el.title1,el.price1)

        let div2 = document.createElement('div');

        let img1 = document.createElement('img');
        img1.setAttribute('src',el.image1);

        let title1 = document.createElement('p');
        title1.innerText = el.title1;

        let price1 = document.createElement('p');
        price1.innerText = "₹" + el.price1;

        let add1 = document.createElement('button');
        add1.innerText = "Add to cart";

        div2.append(img1,title1,price1,add1);
        document.querySelector('#mid-banner-5').append(div2)

    })
 }

appendItem1();