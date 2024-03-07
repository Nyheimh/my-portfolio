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
          "https://api.open-meteo.com/v1/forecast?latitude=41.655300&longitude=-83.535721&current=temperature_2m,wind_speed_10m,relative_humidity_2m",
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weatherData: WeatherData = await weatherResponse.json();
        setWeatherData(weatherData);

        const catFactsResponse = await fetch(
          "https://meowfacts.herokuapp.com/",
        );

        if (!catFactsResponse.ok) {
          throw new Error("Failed to fetch cat facts data");
        }

        const catFactsData: CatFacts = await catFactsResponse.json();
        setCatData(catFactsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => console.error("Error in fetchData:", error));
  }, []);

  if (!weatherData || !catData) return <div>Loading Responses...</div>;

  return (
    <main>
      <Headers />
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8 lg:gap-8">
          <div className="h-64 w-full text-center text-5xl font-bold md:w-96">
            <h1>It's {currentDateTime}</h1>
          </div>
          <div className=" w-full p-2 md:w-1/2">
            <Card label="About me">
              <p className="text-sm">
                I enjoy outdoors 🧗🏽‍♀️, trying new food 🧆, traveling ⛰️, video
                games 👾, and sports 🏈🏃🏾‍♂️. I enjoy visiting new places and
                learning about different cultures.
              </p>
              <p className="pt-2 text-sm">
                My top programming languages are Javascript, React, Next, Go,
                and Nest.
              </p>
            </Card>
          </div>
          <div className="w-full p-2 md:w-1/2">
            <Card label="Sacramento, CA">
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
            <Card label="Cat Fact">
              <p className="text-sm">{catData?.data}</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
