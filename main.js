// let body = document.querySelector("body")

let div = document.querySelector('div')

for (let i = 0; i < 100; i++) {
    // if (i % 2 === 0) {
    let box = document.createElement('div')
    box.style.height = '100px'
    box.style.width = '100px'
    box.style.backgroundColor = 'green'
    box.textContent = i + 1
    box.style.display = 'inline-block'
    box.style.margin = '10px'
    // box.style.paddingLeft = '50px'
    box.style.fontSize = '20px'
    box.style.color = 'white'
    box.style.textAlign = 'center'
    div.appendChild(box)
    // } else {
    // let box = document.createElement('div')
    // box.style.height = '100px'
    // box.style.width = '100px'
    // box.style.backgroundColor = 'yellow'
    // box.textContent = i
    // box.style.display = 'inline-block'
    // box.style.margin = '10px'
    // // box.style.paddingLeft = '50px'
    // box.style.fontSize = '20px'
    // box.style.color = 'black'
    // box.style.textAlign = 'center'
    // div.appendChild(box)
}

var all = document.querySelectorAll('div')
for (let i = 2; i < all.length; i++) {
    console.log(all[i].textContent);
    if (all[i].textContent % i == 0) {
        all[i].style.backgroundColor = 'red'
    }
}
// all[2].style.backgroundColor = 'orange'


// var n =101
// for(let i=0;i<n;i++){
//     if(n%i ===0)
// }







