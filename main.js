let body = document.getElementById("body")
let toggleBTN = document.getElementById('toggle-btn')
let detailsBox = document.querySelectorAll("#details")
let detailsHeader = document.querySelectorAll("#details--h1")
let interactionBox = document.querySelectorAll("#interactions")
let header = document.getElementById("social-h1")
let numbers = document.querySelectorAll("#numbers")
let subHeader = document.getElementById("overview-h2")
let tagName = document.querySelectorAll("#name")
let pAll = document.getElementsByTagName("p")

let clicked = 0

toggleBTN.addEventListener('click', () =>{
    console.log("clicked")
    clicked++
    if(clicked % 2 === 1){
        body.style.background = "linear-gradient(to bottom, hsl(225, 100%, 98%) 30%, hsl(0, 0%, 100%) 70%)"
        toggleBTN.style.backgroundImage = "hsl(230, 22%, 74%)"
        header.style.color = "hsl(230, 17%, 14%)"
        detailsBox.forEach(box =>{
            box.style.backgroundColor = "hsl(227, 47%, 96%)"
        })
        detailsHeader.forEach(box =>{
            box.style.color = "hsl(230, 17%, 14%)"
        })
        tagName.forEach(name =>{
            name.style.color = "hsl(228, 12%, 44%)"
        })
        interactionBox.forEach(box =>{
            box.style.backgroundColor = "hsl(227, 47%, 96%)"
        })
        numbers.forEach(number =>{
            number.style.color = "hsl(230, 17%, 14%)"
        })
        subHeader.style.color = "hsl(230, 17%, 14%)"
        for(let p of pAll){
            p.style.color = "hsl(228, 12%, 44%)"
        }
    }
    else{
        body.style.background = null
        detailsBox.forEach(box =>{
            box.style.backgroundColor = null
        })
        detailsHeader.forEach(box =>{
            box.style.color = null
        })
        tagName.forEach(name =>{
            name.style.color = null
        })
        interactionBox.forEach(box =>{
            box.style.backgroundColor = null
        })
        header.style.color = null
        subHeader.style.color = null
        numbers.forEach(number =>{
            number.style.color = null
        })
        for(let p of pAll){
            p.style.color = null
        }
    }
})

