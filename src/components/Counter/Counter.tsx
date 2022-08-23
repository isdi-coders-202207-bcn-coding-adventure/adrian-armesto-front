import targetDate from "../../data/targetDate";
import useCountdown from "../../hooks/useCountdown";

import CounterStyle from "./CounterStyle";

const Counter = () => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <CounterStyle className="counter">
      <div className="counter__container">
        <div className="counter__counter">{days}</div>
        <span className="counter__text">days</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">{hours}</div>
        <span className="counter__text">hours</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">{minutes}</div>
        <span className="counter__text">minutes</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">{seconds}</div>
        <span className="counter__text">seconds</span>
      </div>
    </CounterStyle>
  );
};

export default Counter;
