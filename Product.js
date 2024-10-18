let All = document.getElementById("All")
let All_display = document.getElementById("All_display")

let AC = document.getElementById("AC")
let ACDisplay = document.getElementById("AC_display")

let Fans = document.getElementById("Fans")
let fanDisplay = document.getElementById("Fans_display")

let Ref = document.getElementById("Ref")
let RefDisplay = document.getElementById("ref_ddisplay")

let TV = document.getElementById("TV")
let Wash = document.getElementById("Wash")
let HAp = document.getElementById("HAp")
let KAp = document.getElementById("KAp")
    
let ac=[
    {
        img:"https://m.media-amazon.com/images/I/512J3gqzLuL._SX679_.jpg",
        name:"Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 6-in-1 Cooling,High Density Filter, Auto Cleanser, 2024 Model,ESTER NEO Exi+, CAI18ER3R34F0,White)",
        price:" ₹34,990",
        discount:"67,790",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"
    },
    {
        img:"https://m.media-amazon.com/images/I/61Ka87z2DSL._SX679_.jpg",
        name:"Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 6-in-1 Cooling,High Density Filter, Auto Cleanser, 2024 Model,ESTER NEO Exi+, CAI18ER3R34F0,White)",
        price:" ₹34,990",
        discount:"58,990",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"
    },
    
   
     {
        img:"https://m.media-amazon.com/images/I/31e2fyjK94L._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 6-in-1 Cooling,High Density Filter, Auto Cleanser, 2024 Model,ESTER NEO Exi+, CAI18ER3R34F0,White)",
        price:" ₹44,990",
        discount:"₹67,790",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"
    },
    {
        img:"https://m.media-amazon.com/images/I/31VW4lpNnUL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU18ZKYWT, 2024 Model, White)",
        price:"₹35,990",
        discount:"₹55,940",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },
   
    {
        img:"https://m.media-amazon.com/images/I/815QEibJCwL._SX679_.jpg",
        name:"LG 1.5 Ton 5 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 4 Way, HD Filter with Anti-Virus Protection, Faster Cooling & Energy Saving, 2024 Model, TS-Q19YNZE, White)",
        price:"₹45,990",
        discount:"₹85,990",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },
    {
        img:"https://m.media-amazon.com/images/I/61Ka87z2DSL._SX679_.jpg",
        name:"Lloyd 1.5 Ton 5 Star Inverter Split AC (5 in 1 Convertible, Anti Corrosion Coating, Copper, PM 2.5 Filter, 2024 Model, White with Chrome Deco Strip, GLS18I5FWBEW)₹40,490",
        price:"₹40,490",
        discount:" ₹66,990",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },
    {
        img:"https://www.voltas.com/cdn/shop/products/Vectra-Platina-adj-ac-22aug_1_beef9ed2-ead6-4fcf-8f2f-14510dff23d7.jpg?v=1725082128&width=1800",
        name:"Adjustable Inverter AC, 1.5 Ton, 3 star- 183V Vectra Platina",
        price:"₹34,490",
        discount:"₹64,990",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },
    {
        img:"https://m.media-amazon.com/images/I/511ZzuWFVYL._SX679_.jpg",
        name:"Hitachi 1.5 Ton Class 3 Star, ice Clean, Xpandable+, Inverter Split AC (100% Copper, Dust Filter, 2024 Model - 3400FXL RAS.G318PCBIBF, White)",
        price:" ₹37,490",
        discount:"₹63,990",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },
    {
        img:"https://m.media-amazon.com/images/I/31VW4lpNnUL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU18ZKYWT, 2024 Model, White)",
        price:"₹35,990",
        discount:"₹55,940",
        delevery:"FREE delivery by Mon, 21 Oct, 7:00 am - 9:00 pm"

    },

]
ac.forEach((items)=>{
    let mainDiv= document.createElement("div")
    let  acImage = document.createElement("img")
        acImage.src=items.img
    let span = document.createElement("span")
    let ACname= document.createElement("b")
        ACname.innerHTML=items.name

    let span1 = document.createElement("span")

    let ACprice=document.createElement("h2")
        ACprice.innerHTML=items.price
    let discount = document.createElement("p")
        discount.innerHTML = items.discount

    let delevery= document.createElement("p")
        delevery.innerHTML=items.delevery


    mainDiv.appendChild(acImage)
    mainDiv.appendChild(span)
    span.appendChild(ACname)
    span.appendChild(span1)
    span1.appendChild(ACprice)
    span1.appendChild(discount)
    span.appendChild(delevery)

    ACDisplay.appendChild(mainDiv)
        
})
let fans=[
    {
       img:"https://m.media-amazon.com/images/I/31UgkW999hL._SX300_SY300_QL70_FMwebp_.jpg",
       name:"Bajaj Frore 1200 mm (48) Star Rated Ceiling Fans for Home |BEE Star Rated Energy Efficient Ceiling Fan |Rust Free Coating for Long Life |High Air Delivery |2-Yr Warranty by Bajaj| Brown",
       price:"₹1,299",
       discount:" ₹2,299",
    //    delevery:"
    },
    {
        img:"https://m.media-amazon.com/images/I/410Dcx8P+nL._SX300_SY300_.jpg",
        name:"Bajaj Maxima 600 mm Ceiling Fan (Brown)",
        price:"1,499",
        discount:" ₹2,299",
     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/318AR0ce6cL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"KUHL Prima A1 1200 Mm Bldc 65% Power Saving Ceiling Fan With Remote | Bee 5 Star Rated & Isi High Air Flow Year Warranty Espresso, Brown",
        price:"₹2,199",
        discount:" ₹6,399",
     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/31aL8v-a0HL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"KUHL Platin D8 1500mm Stylish Power Saving BLDC Ceiling Fan with Remote | Down Light | 38W | 5 Star | Low Noise | IoT – Operate via Mobile & Alexa | Reverse Mode | Free Installation | Teak",
        price:"₹23,399",
        discount:" ₹24,900",
     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/712JTnbqy6L._SX679_.jpg",
        name:"eFF4 Atom 1200 mm 4 Blade 4 Star Power Saving Ceiling Fan with BLDC Motor | Remote Control | Decorative Fan with Lights | High Air Flow | Brown",
        price:"₹8,499",
        discount:" ₹19,999",
     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/41q0NEq96fL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Polycab Superia SP03 Super Premium 800 mm Underlight Designer Ceiling Fan With Remote, Built-in 6 Colour LED Light and 2 years warranty (Antique Copper Rosewood)",
        price:" ₹7,999",
        discount:" ₹8,299",

     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/51YcdUk8aBL._SX569_.jpg",
        name:"Polycab Aereo Plus Star Rated, 1200mm Ceiling Fan For Home | 100% Copper, High Speed & Air Delivery | Saves Up To 33% Electricity, Rust-Proof Aluminium Blades, 52 Watt | 3 Years Warranty【Matt Black】",
        price:"₹2,999",
        discount:" ₹5,499",
     //    delevery:"
     },
     {
        img:"https://m.media-amazon.com/images/I/41U4LEXxtJL._SX569_.jpg",
        name:"Goldmedal Hush Flo BLDC 1250 mm 5 Star Rated Super Decorative Ceiling Fan | Anti Dust | Smooth & Silent Operation | With Remote Control | 100% Copper Motor| 3 years Warranty (SATIN WHITE)",
        price:"₹7,299",
        discount:" ₹,299",
     //    delevery:"
     },
]

fans.forEach((items)=>{
    let mainDiv= document.createElement("div")
    let  fansImage = document.createElement("img")
         fansImage.src=items.img
    let span = document.createElement("span")
    let fansName= document.createElement("b")
        fansName.innerHTML=items.name

    let span1 = document.createElement("span")

    let fansPrice=document.createElement("h2")
        fansPrice.innerHTML=items.price
    let discount = document.createElement("p")
        discount.innerHTML = items.discount

    let delevery= document.createElement("p")
        delevery.innerHTML=items.delevery

    mainDiv.appendChild(fansImage)
    mainDiv.appendChild(span)
    span.appendChild(fansName)
    span.appendChild(span1)
    span1.appendChild(fansPrice)
    span1.appendChild(discount)
    span.appendChild(delevery)

    fanDisplay.appendChild(mainDiv) 
})
// --------------------------------
let ref=[
    {
        img:"https://m.media-amazon.com/images/I/61KTSu7mEbL._SX679_.jpg",
        name:"LG 655 L Frost-Free Smart Inverter Double Door Side-By-Side Refrigerator (2023 Model, GL-B257HDSY, Dazzle Steel, Express Freeze | Multi Air-Flow)",
        price:"₹72,990",
        discount:" ₹1,10,399"
    },
    {
        img:"https://m.media-amazon.com/images/I/31Lkg1NtbvL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Panasonic 450L 2 Star Prime Convertible 6-Stage Smart Inverter Frost-Free Double Door Bottom Mount Refrigerator (NR-BK465BQKN,Diamond Black,Jumbo Fresh Vegetable Basket,Net Capacity 401L)",
        price:"₹56,990",
        discount:" ₹88,690"
    },
    {
        img:"https://m.media-amazon.com/images/I/31fZerhGrHL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Panasonic 338 L 3 Star 6-Stage Smart Inverter Frost-Free Double Door Refrigerator (NR-TG351CUSN, Shining Silver, Jumbo Vegetable Basket, 2022 Model, Net Capacity 308L)",
        price:"₹32,490",
        discount:"₹46,900"
        
    },
    {
        img:"https://m.media-amazon.com/images/I/619sDPV59nL._SX679_.jpg",
        name:"LG 343 L 3 Star Frost-Free Smart Inverter Double Door Refrigerator (2023 Model, GL-S382SPZX, Shiny Steel, Convertible with Express Freeze)",
        price:" ₹38,490",
        discount:"₹50,999"
    },
    {
        img:"https://m.media-amazon.com/images/I/41LhsqWVcIL._SX466_.jpg",
        name:"Whirlpool 300 L Frost-Free Triple-Door Refrigerator (FP 343D PROTTON ROY, Steel Onyx, Double Door Refrigerator Space)",
        price:"₹32,990",
        discount:"₹47,550"
    },
    
    {
        img:"https://m.media-amazon.com/images/I/41coLh7Zm-L._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Whirlpool 207 L 3 Star Icemagic Pro Inverter Direct-Cool Single Door Refrigerator (230 IMPRO PRM 3S WINE PEONY-Z)",
        price:"₹16,490",
        discount:"₹21,800"
    },
    {
        img:"https://m.media-amazon.com/images/I/41KMjTnXB8L._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Whirlpool 8 Kg 5 Star Stainwash Royal Plus Fully Automatic Top Load Washing Machine (SW ROYAL PLUS H 8 KG GREY 10YMW with In-Built Heater)",
        price:"₹18,990",
        discount:" ₹26,500"
    },
    {
        img:"https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/commercial-refrigeration/deep-freezer/FUR.DEE.123567698_1702302382399.webp",
        name:"Blue Star 45 L Mini Bar Refrigerators, MR60-GB/GG",
        price:" 9,899",
        discount:" 8,389 "
    },
    {
        img:"https://m.media-amazon.com/images/I/51i2S7-65DL._SX466_.jpg",
        name:"ROCKWELL 350DDUC, 5 Star, Convertible GREEN Deep Freezer, Double Door, with 10 yrs. Warranty on Cooling Coil and Upto 53% Power Saving",
        price:" ₹27,941",
        discount:"₹41,019"
    },
    {
        img:"https://m.media-amazon.com/images/I/4131xWSZU-L._SX679_.jpg",
        name:"MINIFROST 350 L Double Door Standard Deep Freezer (White, CF-350 DD)",
        price:"₹21,399",
        discount:"₹34,865"
    },
    {
        img:"https://m.media-amazon.com/images/I/31D65qgd9cL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)",
        price:"₹24,999",
        discount:"₹37,099"
    },
    {
        img:"https://m.media-amazon.com/images/I/61LFrjJ9EcL._SX679_.jpg",
        name:"Panasonic 338 L 3 Star 6-Stage Smart Inverter Frost-Free Double Door Refrigerator (NR-TG351CUSN, Shining Silver, Jumbo Vegetable Basket, 2022 Model, Net Capacity 308L)",
        price:" ₹32,490",
        discount:"₹46,900"
    },
    {
        img:"https://m.media-amazon.com/images/I/51DWwMapWxL._SX679_.jpg",
        name:"Godrej 180 L 2 Star Advanced Capillary Technology, With Jumbo Vegetable Tray Direct Cool Single Door Refrigerator(2023 Model, RD EDGE 205B WRF PP BL, Pep Blue)",
        price:" ₹11,990",
        discount:"  ₹17,500"
    },
    {
        img:"https://m.media-amazon.com/images/I/41EowCr9qLL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCU, Scarlet Charm, Base stand with drawer)",
        
        price:"₹17,290",
        discount:" ₹22,199"
    },
    {
        img:"https://m.media-amazon.com/images/I/41IBu9rg9qL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Whirlpool 184 L 4 Star Inverter Direct-Cool Single Door Refrigerator (205 WDE PRM 4SInv SAPPHIRE FLOWER RAIN-Z, Blue, 2023 Model)",
        price:" ₹80,980",
        discount:" ₹1,35,790"
    },
    {
        img:"https://m.media-amazon.com/images/I/41n8eM4wdNL._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Haier 602 L, 3 Star, 100% Convertible Fridge Space, Expert Inverter, Frost Free Side by Side Refrigerator, (HRS-682KS, Black Steel)",
        price:" ₹63,490",
        discount:"₹1,03,990"
    },
    {
        img:"https://m.media-amazon.com/images/I/415mOaccS5L._SY445_SX342_QL70_FMwebp_.jpg",
        name:"Haier 596 L, Wi-Fi Enabled Water Dispenser Frost Free, 2-Door Side by Side Refrigerator with 100% Convertible Fridge Space & Expert Inverter Technology (HRS-682SWDU1, Shiny Steel, 2024 Model)",
        price:"₹69,990",
        discount:"₹1,21,890"
    }
]
ref.forEach((items)=>{
    let mainDiv= document.createElement("div")
    let  refImage = document.createElement("img")
         refImage.src=items.img

    let span = document.createElement("span")

    let refName= document.createElement("b")
        refName.innerHTML=items.name

    let span1 = document.createElement("span")
        span1.setAttribute="span1"

    let refPrice=document.createElement("h2")
        refPrice.innerHTML=items.price
    let discount = document.createElement("p")
        discount.innerHTML = items.discount
    let BuyBTN = document.createElement("button")
        BuyBTN.innerHTML="Buy"

    // let delevery= document.createElement("p")
    //     delevery.innerHTML=items.delevery

    mainDiv.appendChild(refImage)
    mainDiv.appendChild(span)
    span.appendChild(refName)
    span.appendChild(span1)
    span1.appendChild(refPrice)
    span1.appendChild(discount)
    span1.appendChild(BuyBTN)
    // span.appendChild(delevery)

    RefDisplay.appendChild(mainDiv) 
})

// -------------------------------
All.addEventListener("click",()=>{
    All_display.style.display="grid"
    ACDisplay .style.display="grid"
    fanDisplay.style.display="grid"
    RefDisplay.style.display="grid"
})
AC.addEventListener("click",()=>{
     All_display.style.display="none"
    ACDisplay .style.display="grid"
    fanDisplay.style.display="none"
    RefDisplay.style.display="none"

})
Fans.addEventListener("click",()=>{
    fanDisplay.style.display="grid"
    All_display.style.display="none"
    ACDisplay .style.display="none"
    RefDisplay.style.display="none"
})
Ref.addEventListener("click",()=>{
    RefDisplay.style.display="grid"
    fanDisplay.style.display="none"
    All_display.style.display="none"
    ACDisplay .style.display="none"

})