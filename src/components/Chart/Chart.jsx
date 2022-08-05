import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const Chart = ({ chartData }) => {
  const [users, setUser] = useState([]);

  const GetData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setUser((current) => [...current, data]);
    return data;
  };

  useEffect(
    () => {
      for (let i = 0; i < 5; i++) {
        GetData();
      }
    },
    [],
    users
  );

  const [userData, setUserData] = useState({
    labels: users.map((data) => data.results[0].name.first),
    datasets: [
      {
        label: "Users Age",
        data: users.map((data) => data.results[0].dob.age),
      },
    ],
  });
  // name
  const handleChangeName = () => {
    setUserData({
      labels: users.map((data) => data.results[0].name.first),
      datasets: [
        {
          label: "Users Age",
          data: users.map((data) => data.results[0].dob.age),
        },
      ],
    });
  };
  // gender
  const handleChangeGender = () => {
    let male = users.filter((elm) => elm.results[0].gender === "male");
    let female = users.filter((elm) => elm.results[0].gender === "female");

    setUserData({
      labels: ["Male", "Female"],
      datasets: [
        {
          label: "Users Gender",
          data: [male.length, female.length],
        },
      ],
    });
  };

  const handleChangecountry = () => {
    setUserData({
      labels: users.map((data) => data.results[0].location.country),
      datasets: [
        {
          label: "Users Country",
          data: users.map((data) => data.results[0].dob.age),
        },
      ],
    });
  };

  const registration = () => {
    let first = 0;
    let sec = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    users.forEach((data) =>
      data.results[0].registered.date.slice(0, 4) < 2000
        ? first++
        : data.results[0].registered.date.slice(0, 4) > 2000 &&
          data.results[0].registered.date.slice(0, 4) < 2005
        ? sec++
        : data.results[0].registered.date.slice(0, 4) > 2005 &&
          data.results[0].registered.date.slice(0, 4) < 2010
        ? third++
        : data.results[0].registered.date.slice(0, 4) > 2010 &&
          data.results[0].registered.date.slice(0, 4) < 2015
        ? fourth++
        : data.results[0].registered.date.slice(0, 4) > 2015 &&
          data.results[0].registered.date.slice(0, 4) < 2020
        ? sec++
        : fifth++
    );
    setUserData({
      labels: [
        "Befor 2000",
        "2000:2005",
        "2005:2010",
        "2015:2020",
        "2020:2022",
      ],
      datasets: [
        {
          label: "Users Registration",
          data: [first, sec, third, fourth, fifth],
        },
      ],
    });
  };

  return (
    <div style={{ width: "98vw" }}>
      <Bar data={userData} redraw={true} />
      <button onClick={handleChangeName}>Age</button>
      <button onClick={handleChangeGender}>Gender</button>
      <button onClick={handleChangecountry}>country</button>
      <button onClick={registration}>Registration </button>
    </div>
  );
};
