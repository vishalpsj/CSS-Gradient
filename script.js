let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let copyThis = document.getElementById('copyThis')
let copyBtn = document.getElementById('copyBtn')
let rgb1 = "#435678"
let rgb2 = "#167836"
let direction = "to right"



let randomColorGenerator = () => {
    const letter = "0123456789ABCDEF"
    color = "#"
    for(let i = 1; i <= 6; i++){
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}

let gradientLayout = document.getElementById('gradientLayout')

gradientLayout.addEventListener('change', () => {
    direction = gradientLayout.value;
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2}`
    copyThis.textContent = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`
    
})


const handleBtn1 = () => {
    rgb1 = randomColorGenerator()
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2}`
    btn1.innerText = rgb1
    btn1.style.backgroundColor = rgb1
    copyThis.textContent = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`   
}

const handleBtn2 = () => {
    rgb2 = randomColorGenerator()
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2}`
    btn2.innerText = rgb2
    btn2.style.backgroundColor = rgb2
    copyThis.textContent = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`   
}



btn1.addEventListener('click', handleBtn1)
btn2.addEventListener('click', handleBtn2)
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyThis.innerText)
    copyBtn.innerText = "Copied"
    setTimeout(() => {
        copyBtn.innerText = "Copy"
    }, 1000)
})


