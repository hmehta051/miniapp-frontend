import React, { createContext, useState } from "react";

export const AddressContext = createContext();
function AddressContextProvider({ children }) {
  const [address, setAddress] = useState([]);
  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;
