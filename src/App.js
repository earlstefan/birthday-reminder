import "./App.css";
import React, { useState } from "react";

import { profileData } from "./data/data";

function App() {
  const [birthdays, setBirthdays] = useState([...profileData]);
  // const clearOne = () => {
  //   return setBirthdays((bDay) => {});
  // };
  const clearAll = () => {
    return setBirthdays((bDay) => {
      return bDay.slice(birthdays.length);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="birthday-container">
          <div>
            <h1>{birthdays.length} BIRTHDAYS TODAY</h1>
            <button className="btn-bobo-albert" onClick={clearAll}>
              Clear All
            </button>
          </div>
          {birthdays.map((data) => {
            return <Profiles key={data.id} profileDetails={data}></Profiles>;
          })}
        </div>
      </header>
    </div>
  );
}

const Profiles = (props) => {
  const { img, name, age } = props.profileDetails;
  return (
    <>
      <div className="profile-container">
        <img src={img} alt="Profile" />
        <div>
          <span className="profile-title">{name}</span>
          <span className="profile-age">{age} years old</span>
        </div>
      </div>
    </>
  );
};

export default App;
