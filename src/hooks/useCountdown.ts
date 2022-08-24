import { useEffect, useState } from "react";

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

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds, countDown];
};

export default useCountdown;
