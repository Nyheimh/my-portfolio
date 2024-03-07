/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Headers from "./components/Headers";
import Card from "./components/Card";

interface WeatherData {
  current: {
    temperature_2m?: number;
    wind_speed_10m?: number;
    relative_humidity_2m?: number;
  };
}

interface CatFacts {
  data?: string[];
}

const HomePage = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [catData, setCatData] = useState<CatFacts | null>(null);

  const updateDateTime = () => {
    const now = new Date();
    const newDateTime = now.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setCurrentDateTime(newDateTime);
  };

  useEffect(() => {
    updateDateTime();
    const timerId = setInterval(updateDateTime, 60000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=38.5816&longitude=-121.4944&current=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles&forecast_days=1",
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weatherData = (await weatherResponse.json()) as WeatherData;
        setWeatherData(weatherData);

        const catFactsResponse = await fetch(
          "https://meowfacts.herokuapp.com/",
        );

        if (!catFactsResponse.ok) {
          throw new Error("Failed to fetch cat facts data");
        }
        const catFactsData: CatFacts =
          (await catFactsResponse.json()) as CatFacts;
        setCatData(catFactsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => console.error("Error in fetchData:", error));
  }, []);

  if (!weatherData || !catData)
    return (
      <div className="flex  items-center justify-center">
        Loading Nyheim's Portfolio...
      </div>
    );

  return (
    <main>
      <Headers />
      <div className="flex  items-center justify-center">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8 lg:gap-8">
          <div className="h-64 w-full pt-8 text-center text-5xl font-bold md:w-96">
            <h1>It's {currentDateTime}</h1>
          </div>
          <div className=" w-full p-2 md:w-1/2">
            <Card
              link="https://www.linkedin.com/in/nyheimhunter/"
              label="About me"
            >
              <p className="text-sm">
                I love nature 🌲, hiking 🧗🏽‍♀️, trying new food 🧆, traveling ⛰️,
                tech 👾, and sports 🏈🏃🏾‍♂️. I have been passionate in tech since I
                youth and ways tech innovates our lives.
              </p>
              <p className="pt-2 text-sm">
                My recent tech stack is Javascript, React, Next, Go, and Nest.
              </p>
            </Card>
          </div>
          <div className="w-full p-2 md:w-1/2">
            <Card
              label="Sacramento, CA"
              link="https://weather.com/weather/today/l/e2b1c9683cd1dff1137428099ae56c2cbbf604887768893f4b8e2f9c71b559f3c76611e48adc71442faeced8e8931285"
            >
              <p className="mb-4 text-4xl font-bold">
                {weatherData?.current?.temperature_2m ?? "N/A"}° F
              </p>
              <p className="font-bold">
                Wind speed {weatherData?.current.wind_speed_10m ?? "N/A"} km/h
              </p>
              <p className="font-bold">
                Humidity {weatherData?.current.relative_humidity_2m}%
              </p>
            </Card>
          </div>
          <div className="w-full p-2 md:w-1/2">
            <Card
              label="Cat Fact"
              link="https://github.com/wh-iterabb-it/meowfacts"
            >
              <p className="text-sm">{catData?.data}</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
