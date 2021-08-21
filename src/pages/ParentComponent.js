import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const getDataFromAPI = async () => {
    const APIresponse = await fetch("https://xkcd.vercel.app/?comic=1");
    return APIresponse.json();
  };

  return <ChildComponent getDataFromAPI={getDataFromAPI} />;
};

export default ParentComponent;
