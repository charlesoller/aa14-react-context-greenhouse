import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function Hygrometer() {

  const { humidity, setHumidity } = useClimate();
  const [ currHumidity, setCurrHumidity ] = useState(humidity)

  useEffect(() => {
      if(currHumidity !== humidity){
        const timer = setTimeout(()=>{
          if ( humidity > currHumidity){
            //if difference is greater than 2
            if(Math.abs(humidity - currHumidity) >= 2){
              setCurrHumidity(prevHumidity => prevHumidity + 2)
            } else {
              setCurrHumidity(prevHumidity => prevHumidity + 1)
            }
          }
          if ( humidity < currHumidity){
            //if difference is greater than 2
            if(Math.abs(humidity - currHumidity) >= 2){
              //decrement by 2
              setCurrHumidity(prevHumidity => prevHumidity - 2)
            } else {
              //otherwise, decrement by 1
              setCurrHumidity(prevHumidity => prevHumidity - 1)
            }
          }
        }, 1000)

        if(currHumidity === humidity) clearTimeout(timer);
      }
  }, [ humidity, currHumidity ]);
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {currHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={val => setHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
