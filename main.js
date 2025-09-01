let boxes = document.getElementById('boxes')
let API = "https://restcountries.com/v3.1/all?fields=name,cca2,flags"
fetch(API)
    .then(res => res.json())
    .then(data => {
        data.map((item) => {
            boxes.innerHTML += `
        <div class="box">
            <img class="flag" src="${item.flags.png}" alt="">
            <p class="boxtext">${item.name.common}</p>
        </div>
        `
        })
    })

let dark_btn = document.getElementById('dark')
let light_btn = document.getElementById('light')
let body = document.getElementById('body')
let header = document.getElementById('header')
let title = document.getElementById('title')
let searchput = document.getElementById('searchput')

dark_btn.addEventListener("click", () => {
    body.style.background = "black"
    header.style.background = "black"
    dark_btn.style.color = "white"
    light_btn.style.color = "white"
    title.style.color = "white"
})

light_btn.addEventListener("click", () => {
    body.style.background = "white"
    header.style.background = "white"
    dark_btn.style.color = "black"
    light_btn.style.color = "black"
    title.style.color = "black"
})

function filterFlags() {
    let keyword = searchput.value.toLowerCase()
    let
}