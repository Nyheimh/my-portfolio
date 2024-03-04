/* eslint-disable react/no-unescaped-entities */
import Headers from "./components/Headers";
import Card from "./components/Card";

type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
    relative_humidity_2m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
};

type CatFacts = {
  data: string[];
};

export default async function HomePage() {
  const now = new Date();
  const currentDateTime = now.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const weatherData = await getWeather();
  const catData = await getCatFacts();

  return (
    <main>
      <Headers />
      <div className=" mx-auto grid max-w-screen-lg grid-cols-1 items-center justify-center p-6  md:grid-cols-2">
        <div className="mb-8 mt-20 h-64 w-96">
          <h1 className=" p-6 text-5xl font-bold">It's {currentDateTime}</h1>
        </div>
        <div className="w-full p-2">
          <Card label="About me">
            I enjoy outdoors 🧗🏽‍♀️, trying new food 🧆, traveling ⛰️, video games
            👾, sports 🏈🏃🏾‍♂️, and new technology 🖥️. I enjoy visiting new places
            and learning about different cultures.
          </Card>
        </div>
        <div className="w-1/2 p-2">
          <Card label="Sacramento, CA">
            <p className="mb-4 text-4xl font-bold">
              {weatherData.current.temperature_2m}° F
            </p>
            <p className="font-bold">
              {" "}
              Wind speed {weatherData.current.wind_speed_10m} km/h
            </p>
            <p className="font-bold">
              Humidity {weatherData.current.relative_humidity_2m}%
            </p>
          </Card>
        </div>
        <div className="w-1/2 p-2">
          <Card label="Cat Fact">
            <p>{catData.data}</p>
          </Card>
        </div>
      </div>
    </main>
  );
}

async function getWeather(): Promise<Weather> {
  const data = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=41.655300&longitude=-83.535721&current=temperature_2m,wind_speed_10m,relative_humidity_2m",
  );
  return data.json() as Promise<Weather>;
}

async function getCatFacts(): Promise<CatFacts> {
  const data = await fetch("https://meowfacts.herokuapp.com/");
  return data.json() as Promise<CatFacts>;
}
