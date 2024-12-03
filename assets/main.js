var previous=document.querySelector(".prev")
var next=document.querySelector(".next")

next.addEventListener("click",function(){
    let items=document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})

previous.addEventListener("click",function(){
    let items=document.querySelectorAll(".item")
    document.querySelector(".slide").prepend(items[items.length-1])
})

let items=document.querySelectorAll(".slide")

items.forEach(function(item){
   item.addEventListener("click",function(){
    let items=document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})
})
items.forEach(function(item){
    
   item.addEventListener("wheel",function(event){
    if (event.deltaY > 0) {
       
        let items=document.querySelectorAll(".item")
        document.querySelector(".slide").prepend(items[items.length-1])

           
      } else {

        let items=document.querySelectorAll(".item")
        document.querySelector(".slide").appendChild(items[0])
      }
})})

