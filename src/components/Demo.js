import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);


  //memoizing the heavy operations(find nth prime number)
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "w-96 m-4 h-96 border border-black" +
        (isDark && "text-red-700 border bg-slate-800")
      }
    >
      <button
        className={
          "flex bg-orange-500 p-4 m-4" + (isDark && "flex bg-blue-300")
        }
        onClick={() => setIsDark(!isDark)}
      >
        Theme
      </button>
      <input
        className="p-2 m-4 border border-black"
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1 className={"mt-4 font-bold px-4" + (isDark && "text-red-800")}>
        nth Prime : {prime}
      </h1>
    </div>
  );
};

export default Demo;
