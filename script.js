
let Name = document.getElementById("name")
let category = document.getElementById("category")
let group = document.getElementById("group")
let img = document.getElementById("img")
let btn = document.getElementById("btn")

let res = fetch("https://emojihub.yurace.pro/api/random")
res.then((data)=>data.json())
.then((result)=>{
    Name.innerText=result.name
    category.innerText =result.category
    group.innerText = result.group
img.innerHTML = result.htmlCode[0]


}
)

btn,addEventListener("click",()=>{
    window.location.reload()
})