var f_temp = document.getElementById('input')
var convert = document.getElementById('search')
document.getElementById('input').defaultValue='32';
document.getElementById('result').defaultValue='0';
//let newNum = dosument.getElementById('result')

//(f - 32) * 5 / 9
function farToCel() {
    let temp = document.getElementById('input').value
    let newTemp = `${(parseInt(temp) - 32) * 5 / 9} C`
    console.log(newTemp)
    result.innerHTML = newTemp
    if (newTemp > 30) {
        result.style.color = 'red'
    }
    else {
        result.style.color = 'blue'
    }
}convert.addEventListener('click', farToCel)


// function decor() {
//     //let newNum = dosument.getElementById('result').value
//     result.innerHTML = newTemp
//     console.log('okay')
//     if (newTemp.value < 30) {
//         result.style.color = 'red'
//     }
//     else {
//         result.style.color = 'blue'
//     }
//     result.innerHTML = newTemp
// }