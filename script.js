let x = 0;

function addContent(x) {
    
    let limit = 3+x;
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        console.log(posts);
        let container = document.getElementById("main-container");
        container.innerHTML = "";
        let i = 1;
        for (task of posts) {
            if (i <= limit) {
                const article = document.createElement("article");
                const title = document.createElement("h1");
                title.textContent = task.title;
                const body = document.createElement("p");
                body.textContent = task.body;
                article.appendChild(title);
                article.appendChild(body);
                container.appendChild(article);
            }

            i++;
        }
    });
}

function sEnd(){

    let threshold = 300;
    let scrolledTo = window.scrollY + window.innerHeight;
    let isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
    if (isReachBottom){
      x+= 3;
      console.log("skibidi");
      addContent(x);
    }
}


function heaviWeather() {

    let limit = 3;
    console.log("skividi");

    fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true")
    .then((response) => {
        return  response.text();
    })
    .then((weather) => {
        const weatherData = JSON.parse(weather);
        console.log(weatherData);

        let container = document.getElementById("weatherReport");
        container.innerHTML = "";

        const article = document.createElement("article");
        const timezone = document.createElement("h1");
        timezone.textContent = weatherData.timezone;
        const latitude = document.createElement("p");
        latitude.textContent = weatherData.latitude;
        const longitude = document.createElement("p");
        longitude.textContent = weatherData.longitude;

        article.appendChild(timezone)
        article.appendChild(latitude);
        article.appendChild(longitude);
        container.appendChild(article);
        
    });
}
