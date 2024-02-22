const button = document.getElementById("change");
const color = document.getElementsByClassName(".color");

const colors = ['#000000', '#FF0000', '#800080', '#008000', '#00FF00', '#FFFF00', '#0000FF', '#008080', '#00FFFF', '#FF00FF', '#808080', '#C0C0C0' ]

button.addEventListener('click', () => {
    color.textContent = changer;
    let changer = document.body.style.backgroundColor = colors[getRandomNumber()]
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}