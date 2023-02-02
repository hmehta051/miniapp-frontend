import React, { useContext } from "react";
import { AddressContext } from "../context/AddressContextProvider";

function QrBox() {
  const { address } = useContext(AddressContext);
  return (
    <div>
      <center>
        <h2>Entry Log</h2>
        <h3>Location</h3>
        {address.map((el) => {
          return <div>{el}</div>;
        })}
      </center>
    </div>
  );
}

export default QrBox;
