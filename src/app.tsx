import React from "react";
import { css, keyframes, injectGlobal } from "emotion";

injectGlobal({
  "*": {
    padding: 0,
    margin: 0
  },
  body: {
    background: "#202020",
    color: "#f0f0f0",
    fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`
  }
});

const throb = keyframes({
  "40%": {
    transform: "scale(1)"
  },
  "60%": {
    transform: "scale(1.1)"
  }
});

const App = () => (
  <div
    className={css({
      position: "absolute",
      minWidth: "100vw",
      minHeight: "100vh",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      fontSize: "64pt"
    })}
  >
    <div
      className={css({
        animation: `${throb} 0.6s ease infinite`
      })}
    >
      Hello World
    </div>
  </div>
);

export default App;
