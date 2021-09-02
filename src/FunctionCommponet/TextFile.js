import React, { useState } from "react";

export default function TextFile() {
  const [Text, setText] = useState();

  const textState = (e) => {
    setText(e.target.value);
    console.log(Text);
  };

  const UpperCase = () => {
    setText(Text.toUpperCase());
  };
  const Lowercase = () => {
    let casenew = Text.toLowerCase();
    setText(casenew);
  };

  return (
    <div>
      <textarea
        rows="4"
        className="form-control my-3"
        value={Text}
        onChange={textState}
      ></textarea>
      <button className="btn btn-primary mx-1" onClick={UpperCase}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={Lowercase}>
        Lowercase
      </button>

      {/* <p>{Text.length}</p> */}
    </div>
  );
}
