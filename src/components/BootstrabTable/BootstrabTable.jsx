import React from "react";
import { useEffect, useState } from "react";

export const BootstrabTable = (props) => {
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
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">gender</th>
            <th scope="col">country</th>
            <th scope="col">registration</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm, indx) => {
            return (
              <tr key={elm.results[0].id.value}>
                <th scope="row">{indx + 1}</th>
                <td>{elm.results[0].name.first}</td>
                <td>{elm.results[0].dob.age}</td>
                <td>{elm.results[0].gender}</td>
                <td>{elm.results[0].location.country}</td>
                <td>{elm.results[0].registered.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
