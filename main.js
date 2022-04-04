// let body = document.querySelector("body")

let div = document.querySelector('div')

for (let i = 0; i < 101; i++) {


    // if (i === 1) {
    //     let box = document.createElement('div')
    //     box.style.height = '100px'
    //     box.style.width = '100px'
    //     box.style.backgroundColor = 'yellow'
    //     box.textContent = i
    //     box.style.display = 'inline-block'
    //     box.style.margin = '10px'
    //     box.style.fontSize = '20px'
    //     box.style.color = 'white'
    //     box.style.textAlign = 'center'
    //     div.appendChild(box)

    // }
    if (isPrime(i) && i > 2) {
        let box = document.createElement('div')
        box.style.height = '100px'
        box.style.width = '100px'
        box.style.backgroundColor = 'red'
        box.textContent = i
        box.style.display = 'inline-block'
        box.style.margin = '10px'
        box.style.fontSize = '20px'
        box.style.color = 'white'
        box.style.textAlign = 'center'
        div.appendChild(box)
        continue
    }

    if (i % 2 === 0) {
        let box = document.createElement('div')
        box.style.height = '100px'
        box.style.width = '100px'
        box.style.backgroundColor = 'green'
        box.textContent = i
        box.style.display = 'inline-block'
        box.style.margin = '10px'
        box.style.fontSize = '20px'
        box.style.color = 'white'
        box.style.textAlign = 'center'
        div.appendChild(box)
    } else {
        let box = document.createElement('div')
        box.style.height = '100px'
        box.style.width = '100px'
        box.style.backgroundColor = 'yellow'
        box.textContent = i
        box.style.display = 'inline-block'
        box.style.margin = '10px'
        box.style.fontSize = '20px'
        box.style.color = 'black'
        box.style.textAlign = 'center'
        div.appendChild(box)
    }
}


function isPrime(n) {
    for (let i = 0; i < n; i++) {
        if (i === 1) {
            continue;
        }
        if (n % i === 0) {
            return false
        }
    }
    return true
}













