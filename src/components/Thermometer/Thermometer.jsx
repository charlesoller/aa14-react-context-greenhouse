import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useState, useEffect } from 'react';
// import {useClimate} from '../context/ClimateContext'
import { useClimate } from '../../context/ClimateContext';

function Thermometer() {

  const { climate, setClimate} = useClimate();
  const [ currTemp, setCurrTemp ] = useState(climate)
  useEffect(() => {
    console.log("IN USE EFFECT")
    // while(currTemp !== climate){
      // const timer = setTimeout(() => {
      //   setCurrTemp(prevTemp => prevTemp + 1)
      // }, 1000);
      let timer;
      while(currTemp !== climate){
        setTimeout(() => {
          console.log("tick")
          setCurrTemp(prevTemp => prevTemp + 1)
        }, 1000);
      }
      // clearTimeout(timer);
      console.log(currTemp)
    // }

  }, [ climate ]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {currTemp}°F</div>
      <ReactSlider
        value={climate}
        onAfterChange={val => setClimate(val) }
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
