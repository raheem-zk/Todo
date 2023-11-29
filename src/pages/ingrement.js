import React, { useState, useEffect } from "react";

export function Profile() {
  const [value, setState] = useState(1);
  const [colur, setColur] = useState("red");
  useEffect(() => {
    console.log("mount......");
    return () => {
      console.log("unmount clean up......");
    };
  });
  return (
    <div>
      <div style={{ backgroundColor: colur }}>
        <button
          onClick={() => {
            setState((state) => {
              return state > 1 ? state - 1 : state;
            });
          }}
        >
          -
        </button>
        <label>{value}</label>
        <button
          onClick={() => {
            setState(value + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setColur("green");
          }}
        >
          green
        </button>
        <button
          onClick={() => {
            setColur("blue");
          }}
        >
          blue
        </button>
      </div>
    </div>
  );
}
