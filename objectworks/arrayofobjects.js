var products=[
    {id:1,title:"samsungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:16000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"motorola edge 40",price:18000,brand:"moto"},
    {id:6,title:"motorola g34",price:15000,brand:"moto"},
    {id:7,title:"iphone 13",price:140000,brand:"apple"},
    {id:8,title:"iphone 13pro",price:160000,brand:"apple"}
]

//products name available in range of 25k-30k
var priceFilter=products.filter(p=>p.price>=25000 && p.price<=30000).map(p=>p.title)
console.log(priceFilter)
//sort products wrt price order by desc
// var descProducts=products.sort((p1,p2)=>p1.price-p2.price)
// console.log(descProducts)
// costly product
// var veryCostlyProduct=products.reduce((p1,p2)=>p1.price>p2.price?p1:p1)
// console.log(veryCostlyProduct)

// var lowCostProduct=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
// console.log(lowCostProduct)
// total no.of products

// console.log(products.length)
// var numberOfProducts=products.length
// console.log("Number of Products =",numberOfProducts)
// print all mobile titles


// for (let p of products){
//     console.log(p.title)
// }

// productNames

// var productNames=products.map(p=>p.title)
// console.log(productNames)

// print all mobile phones under rs 35k
// var mobilePriceFilter=products.filter(p=>p.price<35000).map(p=>p.title)
// console.log(mobilePriceFilter)

// print all Samsung mobile phones available under rs 50k
// var samMobilePriceFilter=products.filter(p=>p.brand=="samsung" &&p.price<50000)
// console.log(samMobilePriceFilter)


// for (let p in products){
//     if (p.price>35000){
//         console.log("kk",p)
//     }
// }