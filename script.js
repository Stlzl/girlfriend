let image = document.querySelector('.image')
let number = 1
const folder = './img/';
const format = '.jpg'

setInterval(changeImage, 500)

function changeImage() {
    if (number <= 10) {
        document.querySelector('.image').src = folder + number + format;
        number += 1
    } else {
        number = 1
        document.querySelector('.image').src = folder + number + format;
        number += 1
    }
}