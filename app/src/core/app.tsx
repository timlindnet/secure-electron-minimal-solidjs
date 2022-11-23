import { createEffect, createSignal } from "solid-js";
import "./global.css";

function App() {
  const [test, setTest] = createSignal("");
  window.api.invoke("fromMain", "!").then((data) => setTest(data));
  return <div>{test()}</div>;
}

export default App;
