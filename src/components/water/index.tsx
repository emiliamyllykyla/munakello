import { h } from "preact";
import style from "./style.css";
import { useMemo } from "preact/hooks";

const Water = () => {
  const bubbles = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            class={style.bubble}
            style={{
              left: i * 10 + "%",
              animationDuration: 2 + Math.random() * 10 + "s",
            }}
          ></div>
        )),
    []
  );

  return <div class={style.water}>{bubbles}</div>;
};

export default Water;
