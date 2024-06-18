class Tempo {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.inicializar();
    }

    inicializar() {
        document.querySelector("#btn-search").addEventListener("click", () => this.buscar());
    }

    async fetchApi(cidade) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${this.apiKey}&lang=pt_br&units=metric`);
            const data = await response.json();
            console.log(data)
            this.displayWeather(data);
        } catch (error) {
            alert("Algo deu errado");
            console.error(error);
        }
    }

    displayWeather(data) {
        document.querySelector(".cidade").innerHTML = ` ${data.name}`;
        document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)}°C`;
        document.querySelector(".umidade").innerHTML = `Umidade: ${data.main.humidity}%`;
        document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.querySelector(".weather").innerHTML = data.weather[0].description;
    }

    buscar() {
        const cidade = document.querySelector(".input-cidade").value;
        this.fetchApi(cidade);
    }
}

const apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';
const verificarTempo = new Tempo(apiKey);
