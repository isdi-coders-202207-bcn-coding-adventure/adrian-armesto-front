import { useEffect, useState } from "react";
import timeCalculate from "../utils/timeCalculate";

const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();

  const keyDateLessNow = countDownDate - new Date().getTime();

  const [countDown, setCountDown] = useState(keyDateLessNow);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    if (countDown <= 0) {
      clearInterval(interval);
    }
  }, [countDownDate, countDown]);

  return timeCalculate(countDown);
};

export default useCountdown;
