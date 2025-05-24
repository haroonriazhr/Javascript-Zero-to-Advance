// ? Build a Weather App (fetch API data, display temperature).
async function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      const resultDiv = document.getElementById("result");
      const output = document.getElementById("weatherOutput");

      if (city === "") {
        resultDiv.classList.add("hidden");
        return;
      }

      try {
        const apiKey = "e8da7bd9111ccef42c22c5f039713eac";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await res.json();

        if (data.cod !== 200) {
          output.textContent = "❌ City not found!";
        } else {
          const temp = data.main.temp;
          output.textContent = `🌡️ Temperature in ${city}: ${temp}°C`;
        }

        resultDiv.classList.remove("hidden");
      } catch (err) {
        output.textContent = "⚠️ Error fetching data.";
        resultDiv.classList.remove("hidden");
      }
    }