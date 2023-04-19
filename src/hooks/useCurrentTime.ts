import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [time, setTime] = useState(getCurrentTime());

  function printTwoDigits(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  function getCurrentTime() {
    const dateNow = new Date();

    return `${printTwoDigits(dateNow.getHours())} : ${printTwoDigits(
      dateNow.getMinutes()
    )} : ${printTwoDigits(dateNow.getSeconds())}`;
  }

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(updateTime);
  }, []);

  return time;
};

export default useCurrentTime;
