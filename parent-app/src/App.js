import React, { useEffect, useState } from "react";

const App = () => {
  const [childData, setChildData] = useState(0);

  useEffect(() => {
    // Load child component script
    const script = document.createElement("script");
    script.src = "http://localhost:8081/child-component.js";
    document.head.appendChild(script);

    // Listen for events from child component
    const handleDataUpdate = (event) => {
      setChildData(event.detail);
    };

    document.addEventListener("dataUpdate", handleDataUpdate);

    return () => {
      document.removeEventListener("dataUpdate", handleDataUpdate);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent App (React 18)</h1>
      <p>Data from child: {childData}</p>
      <react-child-component />
    </div>
  );
};

export default App;
