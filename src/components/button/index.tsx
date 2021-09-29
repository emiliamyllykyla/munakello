import { h, Fragment } from "preact";
import { Link } from "preact-router";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { Action } from "../../components/minsContext";
import style from "./style.css";

export type ButtonType = "start" | "pause" | "stop";

interface ButtonProps {
  type: ButtonType;
  dispatch: (action: Action) => void;
  rem: number;
  onToggle?: () => void;
}

const ButtonContent = ({ type }: { type: string }) => {
  return (
    <Fragment>
      <div class={style.icon}>
        {type === "start" ? (
          <FaPlay />
        ) : type === "pause" ? (
          <FaPause />
        ) : (
          <FaStop />
        )}
      </div>
      <span>{type}</span>
    </Fragment>
  );
};

const Button = ({ type, dispatch, rem, onToggle }: ButtonProps) => {
  const onClick = () => {
    dispatch(
      type === "start"
        ? {
            type: "START",
            startTime: new Date(),
            duration: rem,
          }
        : type === "pause"
        ? { type: "PAUSE" }
        : { type: "STOP" }
    );
    onToggle && onToggle();
  };

  return (
    <button class={style.button} onClick={onClick}>
      {type === "stop" ? (
        <Link class={style.a} href="/">
          <ButtonContent type={type} />
        </Link>
      ) : (
        <ButtonContent type={type} />
      )}
    </button>
  );
};

export default Button;
