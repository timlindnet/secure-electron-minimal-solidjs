import App from "Core/app";
import { render } from "solid-js/web";

function Index() {
  return <App />;
}

render(() => <Index />, document.getElementById("target") as Element);
