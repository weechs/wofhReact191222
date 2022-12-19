import React from "react";
import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          zIndex: "1",
          background: "var(--color-xmasbg)"
        }}
      >
        <Snowfall
          snowflakeCount={300}
          color="#f6f8ff"
          radius={[0.2, 2.2]}
          speed={[1.0, 3.0]}
          wind={[-0.5, 2.0]}
          changeFrequency={400}
          rotationSpeed={[-1, 4.0]}
        />
      </div>
    </>
  );
}
