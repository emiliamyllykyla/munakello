import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import { useMemo, useState } from "preact/hooks";
import SetMins from "../../components/setmins";

const Home = () => {

  return (
    <div class={style.home}>
      <div>
        <h1>Choose!</h1>
        <SetMins />
      </div>
    </div>
  );
};

export default Home;
