const button = document.getElementById("change");
const color = document.querySelector(".color");

const colors = ['#000000', '#FF0000', '#800080', '#008000', '#00FF00', '#FFFF00', '#0000FF', '#008080', '#00FFFF', '#FF00FF', '#808080', '#9400D3', '#FFD700', '#000080', '#F50707']

button.addEventListener('click', () => {
    let changer = document.body.style.backgroundColor = colors[getRandomNumber()]
    color.textContent = changer;
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}