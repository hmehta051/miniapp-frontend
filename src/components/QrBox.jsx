import React, { useContext } from "react";
import { AddressContext } from "../context/AddressContextProvider";

function QrBox() {
  const { address } = useContext(AddressContext);
  console.log(address);
  return (
    <div>
      <center>
        <h2>Entry Log</h2>
        <h3>Location</h3>
      </center>
    </div>
  );
}

export default QrBox;
