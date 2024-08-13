import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  console.log("Component rendered...");
  return (
    <>
      <div className="w-96 h-96 p-2 m-2 border border-black">
        <div>
          <button
            className="text-white px-2 m-2 bg-yellow-900"
            onClick={() => {
              x = x + 1;
              console.log("x = ", x);
            }}
          >
            Increase X
          </button>
          <span className="font-bold">Let : {x}</span>
        </div>
        <div>
          <button
            className="text-white px-2 m-2 bg-blue-900"
            onClick={() => {
              setY(y + 1);
              console.log("State = ", y);
            }}
          >
            Increase y
          </button>
          <span className="font-bold">State : {y}</span>
        </div>
        <div>
          <button
            className="text-white px-2 m-2 bg-orange-600"
            onClick={() => {
              z.current = z.current + 1;
              console.log("Ref = ", z.current);
            }}
          >
            Increase Z
          </button>
          <span className="font-bold">Ref : {z.current}</span>
        </div>
      </div>
    </>
  );
};

export default Demo2;
