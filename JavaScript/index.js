let height = document.querySelector('[data-height]').value;
let weight = document.querySelector('[data-weight]').value;
let btn = document.querySelector('[data-multiply]')
let display = document.querySelector('[data-answer]')
btn.addEventListener('click', multiply)

function multiply(){
    let height = document.querySelector('[data-height]').value;
    let weight = document.querySelector('[data-weight]').value;
    // let answer = eval(` ${weight} / ${height} * ${height}`)
    let answer = weight/(height**2)
    console.log(answer)
    display.innerText = answer
}