import { useEffect } from "react";
import { useTimerSelectors } from "../../store/timer-store";

const Timer = () => {
    const time = useTimerSelectors.use.time();
    const timerActive=useTimerSelectors.use.timerActive();
    const setTime = useTimerSelectors.use.setTime();

  useEffect(() => {
    let interval =0;
    if (timerActive)
      interval = setInterval(() => {
        setTime();
      }, 1000);
    else clearInterval(interval);
    return () => {
      clearInterval(interval);
    };
  }, [timerActive]);

  return <p>Time: {time}s</p>;
};

export default Timer;
