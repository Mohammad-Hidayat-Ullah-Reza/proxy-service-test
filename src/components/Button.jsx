import React from "react";

function Button({ text, color, py }) {
  return (
    <button
      className={`bg-${color} py-${py} px-10 rounded-md text-white capitalize hover:opacity-90`}
    >
      {text}
    </button>
  );
}

export default Button;
