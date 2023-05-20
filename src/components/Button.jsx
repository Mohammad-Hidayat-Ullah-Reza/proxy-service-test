import React from "react";

function Button({ text }) {
  return (
    <button className="bg-primary py-2 px-10 rounded-md text-white capitalize  hover:opacity-90">
      {text}
    </button>
  );
}

export default Button;
