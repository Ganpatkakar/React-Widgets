import React from 'react';
import styles from './analogWatch.scss';

const date = new Date();
export default function AnalogWatch() {
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  
  const [secondHandAngle, setSecondAngle] = React.useState((second/60)*360);
  const [minuteAngle, setMinuteAngle] = React.useState((minute/60)*360);
  const [hourAngle, setHourAngle] = React.useState((hour/12) * 360);

  React.useEffect(() => {
    const secondTimeout = setInterval(() => {
      const date = new Date();
      const nextAngle = (date.getSeconds()/60)*360;
      console.log(nextAngle)
      setSecondAngle(() => nextAngle);
    }, 1000);

    const minuteTimout = setInterval(() => {
      const date = new Date();
      setMinuteAngle((date.getMinutes()/60)*360);
      setHourAngle((date.getHours()/12) * 360);
    }, 60000);

    () => {
      clearTimeout(secondTimeout);
      clearTimeout(minuteTimout);
    }
  }, []);

  return (
    <div className={styles.watchContainer}>

      {/* <div className={styles.watchCenter}></div> */}
      <div style={{transform: `rotate(${hourAngle}deg)`}} className={styles.hourHand}></div>
      <div style={{transform: `rotate(${minuteAngle}deg)`}} className={styles.minuteHand}></div>
      <div style={{transform: `rotate(${secondHandAngle}deg)`}} className={styles.secondHand}></div>
    </div>
  )
}
