

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
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/b/bbj0001368-2.jpg",
        title: "Head & Shoulders Anti-Dandruff Anti Hair Fall Shampoo - (340ml)",
        price:  285.00, 
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/g/g/ggggghh.jpg",
        title: "Himalaya Herbals Anti-Wrinkle Cream - Pack Of 2",
        price: 200.00, 
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/_/1/.111.jpg",
        title: "Himalaya Herbals Purifying Neem Foaming Face Wash - Pack Of 2",
        price:  423.00, 
        quantity:1,
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
        // console.log(el.title,el.price)
        // document.querySelector('#mid-banner-2').innerHTML = "";

        let div1 = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src',el.image);

        let title = document.createElement('p');
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = "₹" + el.price;

        let add = document.createElement('button');
        add.classList.add("btnAddtOfAV")
        add.innerText = "Add to cart";
        add.addEventListener('click',function(){
            addtoCart1(el)
        })
        

        let div2 = document.createElement('div');
        div2.classList.add("div2Fav");
       
        div2.addEventListener('click', function(){
            console.log(el)
            addtofav1(el);
        })
        let itag = document.createElement('i');
        itag.classList.add('fa-solid');
        itag.classList.add("fa-heart")
        div2.append(itag);

        let div3 = document.createElement("div");
        div3.append(add,div2);
        div3.classList.add("divfav");


        div1.append(img,title,price,div3);
        document.querySelector('#mid-banner-2').append(div1)

    })
 }

appendItem();
                  

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<           functionality of add to fav           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function addtofav1(el){
   
    let newData1 = JSON.parse(localStorage.getItem("fav-products")) || [];
    newData1.push(el);

    localStorage.setItem('fav-products',JSON.stringify(newData1))
    appendItem1(newData1);
    alert("Product has been added to your Wish List");
   
}
document.querySelector("#myfav").addEventListener("click",function(){
    window.open("fav.html","_self");
})
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<          mid-banner-5             >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let data1 = [

    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/2/d28bf778903487024816_1.jpg",
        title: "Miss Claire Blusher Kit - 3660-B-3",
        price:  410.00, 
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/7/3732f778903487000209_1.jpg",
        title: "Miss Claire Eyeshadow Kit - 3716-11-3",
        price:  395.00, 
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/b/d/bdd30238903487002319_1.jpg",
        title: "Miss Claire M20 - Pointed Blending",
        price:  375.00, 
        quantity:1,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/1/610f0238903487002296_1.jpg",
        title: "Miss Claire M19 - Eyeshadow Blending",
        price:  375.00, 
        quantity:1,
    },
];


function appendItem1(){
    document.querySelector('#mid-banner-5').innerHTML = null;

    data1.forEach(function(el,i){
        // console.log(el.title,el.price1)

        let div2 = document.createElement('div');

        let img1 = document.createElement('img');
        img1.setAttribute('src',el.image);

        let title1 = document.createElement('p');
        title1.innerText = el.title;

        let price1 = document.createElement('p');
        price1.innerText = "₹" + el.price;

        

        let add1 = document.createElement('button');
        add1.classList.add("btnAddtOfAV1")
        add1.innerText = "Add to cart";
        add1.addEventListener('click',function(){
                  console.log(el)
             addtoCart(el)
        })

        let div3 = document.createElement('div');
        div3.classList.add("div3Fav");
        div3.addEventListener('click', function(){
            // console.log(el)
            addtofav(el);
        })

        let itag = document.createElement('i');
        itag.classList.add('fa-solid');
        itag.classList.add("fa-heart")
        div3.append(add1, itag);



        let div4 = document.createElement("div");
        div4.append(add1,div3);
        div4.classList.add("div4fav");

        div2.append(img1,title1,price1,div4);
        document.querySelector('#mid-banner-5').append(div2)

    })
 }

appendItem1();

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<           functionality of add to fav           >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  function addtofav(el){
   
   

    let newData = JSON.parse(localStorage.getItem("fav-products")) || [];
    newData.push(el);

    localStorage.setItem('fav-products',JSON.stringify(newData))
    appendItem1(newData);
    alert("Product has been added to your Wish List");
   
}
// ....................................................................................................................................

document.querySelector("#myfav").addEventListener("click",function(){
    window.open("fav.html","_self");
})



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      functionality to add to cart       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function addtoCart(el){
   

    let newData1 = JSON.parse(localStorage.getItem("cart-Products")) || [];
    newData1.push(el);

    localStorage.setItem('cart-Products',JSON.stringify(newData1))
    appendItem1(newData1);
    alert("Product has been added to your Cart");
   
}

document.querySelector("#but").addEventListener("click",function(){
    window.open("cart.html","_self");
})
// .......................................................................................................................................

function addtoCart1(el){
   

    let newData2 = JSON.parse(localStorage.getItem("cart-Products")) || [];
    newData2.push(el);

    localStorage.setItem('cart-Products',JSON.stringify(newData2))
    appendItem1(newData2);
    alert("Product has been added to your Cart");
}
document.querySelector("#but").addEventListener("click",function(){
    window.open("cart.html","_self");
})






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>       my account     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  document.querySelector('.userButton').addEventListener('click', function(){
    // console.log("************************");
    let btnAc = document.querySelector('.registerDeactive');
    if(btnAc.style.display==="block"){
        btnAc.style.display ="none";
    }else{
        btnAc.style.display ="block";
    }
      
  })

  document.querySelector('#regis').addEventListener('click', function(){
      window.open("./register.html","_self")
  })

  document.querySelector('#log').addEventListener('click', function(){
    window.open("./login.html","_self")
})

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  

// function search(){
//     let q = document.querySelector('#searchprodcut').value;
//     let newDataS = data.filter(function(el){
//         return el.title.toLowerCase().includes(q.toLowerCase());
//     })
//     appendItem(newDataS);
// }