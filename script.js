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

    console.log("skividi");

    let Madrid = "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.70256&current_weather=true";
    let Tokio = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
    let Napoles = "https://api.open-meteo.com/v1/forecast?latitude=40.8563100&longitude=14.2464100&current_weather=true";
    let Egipt = "https://api.open-meteo.com/v1/forecast?latitude=26.820553&longitude=30.802498&current_weather=true";
    let NewYork = "https://api.open-meteo.com/v1/forecast?latitude=40.71427&longitude=-74.00597&current_weather=true";
    let Loc = [Madrid, Tokio, Napoles, Egipt, NewYork];
    let LocNm = ["Madrid", "Tokio", "Napoles", "Egipt", "NewYork"];

    let container = document.getElementById("weatherReport");
    container.innerHTML = "";

    for(let i = 0; i <= 4; i++){

    
        fetch(Loc[i])
        .then((response) => {
            return  response.text();
        })
        .then((weather) => {
            const weatherData = JSON.parse(weather);
            console.log(weatherData);

            let container = document.getElementById("weatherReport");

            const title = document.createElement("h1");
            title.textContent = "↓ " + LocNm[i] + " ↓";
            const article = document.createElement("article");

            const temp = document.createElement("p");
            temp.textContent = "Temperature : ";
            temp.textContent += weatherData.current_weather.temperature;
            temp.textContent += weatherData.current_weather_units.temperature;

            const ws = document.createElement("p");
            ws.textContent = "Wind Speed : ";
            ws.textContent += weatherData.current_weather.windspeed;
            ws.textContent += weatherData.current_weather_units.windspeed;


            const wd = document.createElement("p");
            wd.textContent = "Wind Direction : ";
            wd.textContent += weatherData.current_weather.winddirection;
            wd.textContent += weatherData.current_weather_units.winddirection;

            const crTime = document.createElement("p");
            crTime.textContent = "Last update : "
            crTime.textContent += weatherData.current_weather.time;
            crTime.textContent += " in " + weatherData.timezone;
        


            container.appendChild(title);
            article.appendChild(temp);
            article.appendChild(ws);
            article.appendChild(wd);
            article.appendChild(crTime);
            container.appendChild(article);
            
        });
    }
}



setInterval('heaviWeather()', 30000);
