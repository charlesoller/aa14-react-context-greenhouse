import './LightSwitch.css';

import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { setThemeName } = useTheme();

  return (
    <div className="light-switch day">
      <div className="on" onClick={() => setThemeName("day")}>DAY</div>
      <div className="off" onClick={() => setThemeName("night")}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
