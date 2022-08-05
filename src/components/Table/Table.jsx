import { useEffect, useState } from "react";
// import "./general.css";

const Loading = () => {
  return (
    <div className="Loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const Table = () => {
  const [users, setUser] = useState([]);

  const GetData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setUser((current) => [...current, data]);
    return data;
  };
  const fetchMore = () => {
    for (let i = 0; i < 5; i++) {
      GetData();
    }
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
    <div className="Table">
      {users.length > 0 ? (
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th>
                  <span>Name</span>
                </th>
                <th>City</th>
                <th>Status</th>
                <th>Username</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((elm) => {
                return (
                  <tr key={elm.results[0].uid}>
                    <td>
                      <div className="firstCell">
                        <div className="leftimg">
                          <img
                            src={elm.results[0].picture.thumbnail}
                            alt="img"
                          />
                        </div>
                        <div className="right">
                          <h6>
                            {elm.results[0].name["first"]}{" "}
                            {elm.results[0].name["last"]}
                          </h6>
                          <p>{elm.results[0].email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="right">
                        <h6>{elm.results[0].location["country"]}</h6>
                        <p>{elm.results[0].location["city"]}</p>
                      </div>
                    </td>
                    <td>
                      <span className="stauts">Active</span>
                    </td>
                    <td>
                      <span className="role">
                        {elm.results[0].login["username"]}
                      </span>
                    </td>
                    <td>
                      <span className="role">
                        {elm.results[0].login["username"]}
                      </span>
                    </td>
                    <td>
                      <a href="**">Edit</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
      <button onClick={fetchMore}>Load More</button>
    </div>
  );
}
