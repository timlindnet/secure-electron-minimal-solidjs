import React, { useEffect, useState } from "react";
import "./global.css";

function App() {
  const [test, setTest] = useState("");
  useEffect(() => {
    window.api.invoke("fromMain", "!").then((data) => setTest(data));
  }, []);
  return <div>{test}</div>;
}

export default App;
