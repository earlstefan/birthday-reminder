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
              CLEAR ALL
            </button>
          </div>
          {birthdays.map((data) => {
            return (
              <Profiles
                key={data.id}
                profileDetails={data}
                birthdays={birthdays}
                setBirthdays={setBirthdays}
              ></Profiles>
            );
          })}
        </div>
      </header>
    </div>
  );
}

const Profiles = (props) => {
  const { id, img, name, age } = props.profileDetails;
  const removeItem = (id) => {
    let newBirthdays = props.birthdays.filter((bDay) => bDay.id !== id);
    props.setBirthdays(newBirthdays);
  };
  return (
    <>
      <div className="profile-container">
        <img src={img} alt="Profile" />
        <div>
          <span className="profile-title">{name}</span>
          <span className="profile-age">{age} years old</span>
          <button className="btn-bobo-albert" onClick={() => removeItem(id)}>
            I DELETE YOU
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
