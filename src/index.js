import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@rmwc/button";
import "./index.scss";

function App() {
  return <Button raised>Hello, world!</Button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
