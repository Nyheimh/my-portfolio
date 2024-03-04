/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
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
  const weatherData = await getWeather();
  const catData = await getCatFacts();
  return (
    <main>
      <Headers />
      <div className="h-790px mx-auto grid max-w-screen-lg grid-cols-1 items-center justify-center gap-8 px-4 py-8 md:grid-cols-2 ">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold">
            It's Monday, Mar 4 2024 at 11:50AM
          </h1>
        </div>
        {/* <div className="-m-2 flex flex-wrap"> */}
        <div className="w-full p-2">
          <Card label="About me">
            I enjoy the outdoors and the beautiful weather in northern
            california. I wanted to move to Texas, but my family lives here.
          </Card>
        </div>
        <div className="w-1/2 p-2">
          <Card label="Sacramento, CA">
            <p className="mb-4 text-2xl font-bold">
              {weatherData.current.temperature_2m}° F
            </p>
            <p> Wind speed {weatherData.current.wind_speed_10m}</p>
            <p>Humidity {weatherData.current.relative_humidity_2m}</p>
          </Card>
        </div>
        <div className="w-1/2 p-2">
          <Card label="Cat Fact">
            <p>{catData.data}</p>
          </Card>
        </div>
        {/* </div> */}
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
