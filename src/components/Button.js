import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 m-1 bg-gray-200 rounded-lg py-1 ">{name}</button>
    </div>
  );
};

export default Button;
