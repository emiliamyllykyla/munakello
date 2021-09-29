import { h } from "preact";
import style from "./style.css";

const Countdown = ({ ms }: { ms: number }) => {
  const s = ms / 1000;
  const mins = Math.floor(s / 60);
  const seconds = Math.floor(s % 60);

  return (
    <div class={style.countdown}>
      <span>{mins}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
};

export default Countdown;
