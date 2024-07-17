import React from "react";

const LogoWhite = () => {
  return (
    //  <img src="src/assets/img/logo-white.png" id="logoCovid" alt="Logo"/>
    <h1 className="text-3xl font-bold text-white flex ml-4">
      Covid Tracker{" "}
      <span className="pl-2">
        <img
          src="src/assets/img/covidlogo.png"
          className="size-8"
          id="logoCovid"
          alt="Logo"
        />
      </span>
    </h1>
  );
};

export default LogoWhite;
