import { h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { TimerContext } from "../../components/minsContext";
import style from "./style.css";
import Water from "../../components/water";
import Button from "../../components/button";
import Countdown from "../../components/countdown";
import { ButtonType } from "../../components/button";
import Alert from "../../components/alert";

const toggleBtn = (prev: ButtonType) => (prev === "start" ? "pause" : "start");

const remaining = (startTime?: Date, dur?: number) => {
  const start = startTime?.valueOf() ?? 0;
  const duration = dur ?? 0;
  return start + duration - Date.now();
};

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState<number>(1);
  const [btnType, setBtnType] = useState<ButtonType>("pause");
  const [alert, setAlert] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false)
  const { state, dispatch } = useContext(TimerContext);

  useEffect(() => {
    if (state.active) {
      let interval = setInterval(() => {
        const rem = remaining(state.startTime, state.duration);
        if (rem <= 0) {
          setCompleted(true)
          setAlert(true);
          clearInterval(interval);
        } else setRemainingTime(rem);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <div class={style.container}>
      <Alert alert={alert} onClose={() => setAlert(false)} />
      <div class={style.egg}>
        <div>
          <Countdown ms={remainingTime} />
          <div class={style.buttons}>
            {!completed &&
              <Button
              type={btnType === "start" ? "start" : "pause"}
              dispatch={dispatch}
              rem={remainingTime}
              onToggle={() => setBtnType((prev) => toggleBtn(prev))}
            />}
            <Button type="stop" dispatch={dispatch} rem={remainingTime} />
          </div>
        </div>
      </div>
      <Water />
    </div>
  );
};

export default Timer;
