import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Accordion({ title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between text-xl font-semibold cursor-pointer p-3 border-b-2"
        onClick={() => setOpen((op) => !op)}
      >
        <p className="capitalize">{title}</p>

        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div
        className={`mt-4 p-3 text-gray-500 accordion-desc ${open && "open"} `}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          molestias repudiandae animi asperiores veniam? Velit, cumque ducimus
          voluptates eum doloremque, laudantium consequuntur aut beatae libero
          nihil dolor odit quisquam asperiores molestiae neque voluptatem quod.
          Expedita dignissimos totam dolorum neque iure.
        </p>
      </div>
    </div>
  );
}

export default Accordion;
