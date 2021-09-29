import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import { Match } from "preact-router/match";
import { CSSTransition } from "react-transition-group";

import Home from "../routes/home";
import NotFoundPage from "../routes/notfound";
import Timer from "../routes/timer";

import styles from "./app.css";
import { TimerProvider } from "./minsContext";

const routes = [
  { path: "/", page: <Home /> },
  { path: "/timer", page: <Timer /> },
];

const Page: FunctionalComponent<{ path: string }> = (props) => (
  <Match path={props.path}>
    {({ matches }: { matches: boolean }) => (
      <CSSTransition
        in={matches}
        timeout={3000}
        classNames={{
          enter: styles.pageEnter,
          enterDone: styles.pageEnterDone,
          exit: styles.pageExit,
        }}
        unmountOnExit
      >
        <div class={styles.page}>{props.children}</div>
      </CSSTransition>
    )}
  </Match>
);

const Pages = () => (
  <div>
    {routes.map((route) => (
      <Page path={route.path}>{route.page}</Page>
    ))}
  </div>
);

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <TimerProvider>
    <Router>
      {routes.map((route) => (
        <Route path={route.path} component={Pages} />
      ))}
      <NotFoundPage default />
    </Router>
    </TimerProvider>
  </div>
);

export default App;
