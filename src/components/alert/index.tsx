import { Fragment, h } from "preact";
import style from "./style.css";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "preact/hooks";

const url =
  "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg";
const audio = new Audio(url);

const Alert = ({ alert, onClose }: { alert: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (alert) {
      audio.play();
    }
    return () => audio.pause();
  }, [alert]);

  return (
    <Fragment>
      {alert && (
        <div class={style.container}>
          <div class={style.alert}>
            Eggs are ready!
            <span class={style.x} onClick={onClose}>
              <IoMdClose />
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
