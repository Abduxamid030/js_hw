// var X = prompt("Введите число");

// if (X.toString().split("").reverse().join("") == X.toString()) {
//     alert("Это палиндром")
// } else {
//     alert("Это не палиндром")
// }


// String.prototype.firstLetterCaps = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   }
  
//   let str = ' am  the code'
//   let arr = str.split(' ')
//   let out = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//       out += arr[i].firstLetterCaps()
//     } else {
//       out += arr[i].firstLetterCaps() + ' '
//     }
//   }
  
//   console.log(out)


// let res = document.querySelector('#res')


// document.addEventListener('submit', (event)=>{
//     event.preventDefault()

//     let min = document.querySelector('#a').value
//     let max = document.querySelector('#b').value

//     function generateRandomFloatInRange(min, max) {
//         return Math.floor((Math.random() * (max - min + 1)) + min)
//     }

//     res.textContent = generateRandomFloatInRange(min, max)
// })

//2
//----
let anArr = [];
for (let i = 0; i < 50; i++){
    let a = Math.floor(Math.random() * 98) + 2
    anArr[i] = a
}

let createCards = y => {
    let match_container = document.querySelector("#mc");
    let matchElement = document.createElement('div');
  matchElement.classList.add('match-title'); 

  for(let i=0; i<y.length; i++){
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    if(anArr[i] % 2 == 0){
    infoDiv.classList.add("green");
    }else{
    infoDiv.classList.add("red");
    }
    
    let numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.innerText = y[i];
    
    matchElement.appendChild(infoDiv);
    infoDiv.appendChild(numberSpan);
    match_container.appendChild(matchElement);
  }
}

createCards(anArr)

//1
    document.addEventListener('submit', (event)=>{
        event.preventDefault()
    let a = document.querySelector("#name").value
    let b = document.querySelector("#result")
    if(a.length > 3){
        b.textContent = a + ' xush kelibsiz'
    } else {
        b.textContent = 'Username is less than 3!'
    }
    })

//3
createCards(anArr)

let display = document.querySelector('.res')
let btn = document.querySelector('.one')
let btn2 = document.querySelector('.two')
let btn3 = document.querySelector('.three')

function add_item(x){
    let value = display.textContent
    value = value - 0
    display.textContent = value + x
}

btn.addEventListener('click', ()=>{
    add_item(1)
})

btn2.addEventListener('click', ()=>{
    add_item(2)
})

btn3.addEventListener('click', ()=>{
    add_item(3)
})