import React, { useState } from "react";

export default function Playground() {
  const [text, setText] = useState(" ");
  const [checked, setChecked] = useState(false);

  const handleTextChange = e => setText(e.target.value)
  //set state with func
  const handleCheckoboxChange = e => setChecked(prevChecked => !prevChecked)
  
  return (
    <div>
        <p>Use State Hooks</p>
      <section>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />

        <input
          type="checkbox"
          value={checked}
          onChange={handleCheckoboxChange}
        />
      </section>
     

      <section>
        <div
          style={{
            border: "1px dotted rgb(111, 171, 81)",
            margin: "20px auto", display: "table" 
          }}
        >
          Text - {text}
        </div>
        <div
          style={{
            border: "1px dotted rgb(111, 171, 81)",
            margin: "20px auto", display: "table" 
          }}
        >
          is checked {checked.toString()}
        </div>
      </section>
    </div>
  );
}
