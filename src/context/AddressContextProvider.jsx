import React, { createContext, useState } from "react";

export const AddressContext = createContext();
function AddressContextProvider({ children }) {
  const [address, setAddress] = useState([]);
  const placeArr = [];
  return (
    <AddressContext.Provider value={{ address, setAddress, placeArr }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;
