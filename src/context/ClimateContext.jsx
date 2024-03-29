// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useState, useContext } from "react"

const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
    const [ climate, setClimate ] = useState(50);
    const [ humidity, setHumidity ] = useState(40);

    return (
      <ClimateContext.Provider
        value={{
          climate,
          setClimate,
          humidity,
          setHumidity
        }}
      >
        {children}
      </ClimateContext.Provider>
    );
  }
