const button = document.querySelector(".button");
const img = document.querySelector(".img");
const url = "https://api.thecatapi.com/v1/images/search";


async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json()

    
        console.log(data[url]);

    } catch (error) {
        throw new Error(error)
    }
}



fetchHandler()