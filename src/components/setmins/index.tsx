import { h } from "preact";
import style from "./style.css";
import { useContext, useState } from "preact/hooks";
import { Egg } from "./egg";
import { Link } from "preact-router";
import { TimerContext } from "../minsContext";

const minutesToMs = (min: number) => min * 60 * 1000;

const TIMES = {
  SOFT: minutesToMs(4).toString(),
  MEDIUM: minutesToMs(6).toString(),
  HARD: minutesToMs(9).toString(),
};

const SetMins = () => {
  const [radio, setRadio] = useState<string>(TIMES.MEDIUM);
  const { dispatch } = useContext(TimerContext);

  const handleRadioChange = (e: h.JSX.TargetedMouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRadio(value);
    navigator.vibrate(40);
  };

  return (
    <form class={style.form}>
      <div class={style.choices}>
        <div class={style.minBtns}>
          <input
            class={style.radio}
            type="radio"
            id="4"
            value={TIMES.SOFT}
            name="eggtime"
            checked={radio === TIMES.SOFT}
            onClick={handleRadioChange}
          />

          <label for="4">
            <Egg color="rgb(255, 160, 70)" />4 min
          </label>

          <input
            class={style.radio}
            type="radio"
            id="6"
            value={TIMES.MEDIUM}
            name="eggtime"
            checked={radio === TIMES.MEDIUM}
            onClick={handleRadioChange}
          />

          <label for="6">
            <Egg color="rgb(255, 210, 100)" />6 min
          </label>

          <input
            class={style.radio}
            type="radio"
            id="9"
            value={TIMES.HARD}
            name="eggtime"
            checked={radio === TIMES.HARD}
            onClick={handleRadioChange}
          />
          <label for="9">
            <Egg color="rgb(255, 240, 130)" />9 min
          </label>
        </div>
      </div>

      <Link
        class={style.button}
        href="/timer"
        onClick={() =>
          dispatch({
            type: "START",
            startTime: new Date(),
            duration: parseInt(radio),
          })
        }
      >
        <img height="100" src="/assets/pot.svg" alt="Pot" />
      </Link>
    </form>
  );
};

export default SetMins;
