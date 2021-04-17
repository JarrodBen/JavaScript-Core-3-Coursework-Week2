document.getElementById("button").addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((statusResponse) => {
        if (statusResponse.status >= 200 && statusResponse.status <= 300) {
            return statusResponse.json();
        } else {
            throw new Error(
                `Whooops, something's wrong here: ${statusResponse.status} ${statusResponse.statusText}`
            );
        }
    })
    .then((randomImg) => {
        document.getElementById(
            "ul"
        ).textContent = `<li><img src="${randomImg.message}" alt=" "></li>;`
    })
})
