import { FunctionalComponent, h } from "preact";
import { createContext } from "preact";
import { useReducer } from "preact/hooks";

type State = {
  active: boolean;
  startTime?: Date;
  duration?: number;
};

export type Action =
  | { type: "START"; duration: number; startTime: Date }
  | { type: "PAUSE" }
  | { type: "STOP" };

export const timerReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START":
      return {
        active: true,
        duration: action.duration,
        startTime: action.startTime,
      };
    case "PAUSE":
      return { ...state, active: false };
    case "STOP":
      return { active: false };
  }
};

export const TimerContext = createContext<{
  state: State;
  dispatch: (action: Action) => void;
}>({ state: { active: false }, dispatch: () => null });

export const TimerProvider: FunctionalComponent = (props) => {
  const [state, dispatch] = useReducer(timerReducer, { active: false });

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TimerContext.Provider>
  );
};
