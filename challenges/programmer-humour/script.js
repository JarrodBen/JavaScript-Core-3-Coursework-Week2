let apiAddress = `https://xkcd.now.sh/?comic=latest`;

fetch(apiAddress)
.then(response => response.json())
.then(data => console.log(data.img))
.catch(error => console.log(error));
