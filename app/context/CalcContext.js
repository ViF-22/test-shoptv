import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    res: "",
  });

  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
