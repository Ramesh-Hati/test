let data = [
    {
        img:"https://m.media-amazon.com/images/I/815QEibJCwL._SL1500_.jpg",
        name:"LG 1.5 Ton 5 Star DUAL Inverter Split AC",
        price:"₹45,990"
    },
    {
        img:"https://m.media-amazon.com/images/I/61hQvWQiYAL._SX679_.jpg",
        name:"Lloyd 1.5 Ton 3 Star Inverter Split AC",
        price:"₹35,990"
    },
    {
        img:"https://m.media-amazon.com/images/I/61mLZha51UL._SL1500_.jpg",
        name:" Haier 1.5 ton 3 Srat Triple Inverter Intelli Smart Split AC",
        price:"₹45,990"
    },
    {
        img:"https://m.media-amazon.com/images/I/61MV+cJP9UL._SX679_.jpg",
        name:"Lloyd Stylus 1.5 Ton 3 Star Wi-Fi Inverter Split AC ",
        price:"₹45,990"
    },
    {
        img:"https://m.media-amazon.com/images/I/815QEibJCwL._SL1500_.jpg",
        name:"LG 1.5 Ton 5 Star DUAL Inverter Split AC",
        price:"₹45,990"
    },
    {
        img:"https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/55fdefdd0e3047bfb3fe5836b091547e_185a717db20_image.jpeg?q=90",
        name:"Hindware Smart Appliances 45 L Room/Personal Air Cooler  (N/A, XENO)",
        price:"₹4,990"
    },
    {
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/p/4/r/-original-imah4b6mmfnwhagx.jpeg?q=70",
        name:"Hindware Smart Appliances 45 L Room/Personal Air Cooler  (N/A, XENO)",
        price:"₹5,990"
        
    },
    {
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/w/e/q/150-150-thar-150-2024-air-cooler-90l-water-tank-38mm-heat-sink-original-imahybpwhzpvbwhn.jpeg?q=70",
        name:"TOMASHI 90 L Window Air Cooler ",
        price:"₹15,990"
    },
    {
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/b/t/l/-original-imah4b8zf5fzrebq.jpeg?q=70",
        name:"BAJAJ 36 L Room/Personal Air Cooler ",
        price:"₹5,940"
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"BAJAJ 55 L Window Air Cooler ",
        price:"₹7,940"
    }
]
 
let Container = document.getElementById("container")

data.forEach((items)=>{
let mainDiv = document.createElement("div")
let img=document.createElement("img")
    img.src=items.img
let prdctName = document.createElement("h4")
    prdctName.innerHTML = items.name 

let span1 = document.createElement("span")
    span1.style.display="flex"

let pdrctPrice = document.createElement("h3")
    pdrctPrice.innerHTML = items.price
let buyBtn = document.createElement("button")
    buyBtn.innerHTML = "Buy"



mainDiv.appendChild(img)
mainDiv.appendChild(prdctName)
mainDiv.appendChild(span1)
span1.appendChild(pdrctPrice)
span1.appendChild(buyBtn)

document.getElementById("Obj_Div").appendChild(mainDiv)


mainDiv.addEventListener("mouseover",()=>{
    mainDiv.style.border="4px solid aqua"
    mainDiv.style.boxShadow=" 0px 0px 20px white"

})
mainDiv.addEventListener("mouseleave",()=>{
    mainDiv.style.border="none"
    mainDiv.style.boxShadow="none"

})
mainDiv.addEventListener("click",()=>{
    // mainDiv.style.height="100vh"
    // mainDiv.style.width="100vw"
    // mainDiv.style.display="block"
    // Container.style.display="none"



})

})

let data2=[
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/z/q/9/160-160-shield-series-solair-55-with-duratuff-pro-motor-inverter-original-imah234hxuy6fdmf.jpeg?q=70&crop=false",
        name:"Coller",
        price:"2444",
    },
]
   data2.forEach((items2)=>{
    let mainDiv = document.createElement("div")
        mainDiv.style.border="none"
    let img = document.createElement("img")
        img.src=items2.img
    let prdctName=document.createElement("h3")
        prdctName.innerHTML=items2.name
    let price = document.createElement("h2")
        price.innerHTML=items2.price

        mainDiv.addEventListener("mouseover",()=>{
            mainDiv.style.border="4px solid #e3e1e1"
            mainDiv.style.boxShadow=" 0px 0px 20px white"

        })
        mainDiv.addEventListener("mouseleave",()=>{
            mainDiv.style.border="none"
            mainDiv.style.boxShadow="none"

        })
mainDiv.appendChild(img)
mainDiv.appendChild(prdctName)
mainDiv.appendChild(price)
document.getElementById("Obj_Div2").appendChild(mainDiv)
    

   })