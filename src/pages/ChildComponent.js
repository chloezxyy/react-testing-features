import React, { useState } from "react";

const ChildComponent = (props) => {
  const { getDataFromAPI } = props;
  const [displayText, setdisplayText] = useState("Initial");

  async function changedisplayText() {
    let apiResponse = await getDataFromAPI();
    console.log(apiResponse.title);
    setdisplayText(apiResponse.title);
  }

  return (
    <>
      <div>
        <button onClick={changedisplayText}>Click Me</button>
      </div>
      <div>{displayText}</div>
    </>
  );
};

export default ChildComponent;
