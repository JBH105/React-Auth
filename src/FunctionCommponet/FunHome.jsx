import e from "cors";
import React, { useState } from "react";

function FunHome() {
  const [name, setname] = useState("");
  const [select, setselect] = useState("");
  const [checkbox, setcheckbox] = useState(false)

  function getFormData(e) {
    console.warn(name, select,checkbox);
    e.preventDefault();
  }
  return (
    <div>
      <h3>Handle Form in React </h3>
      <br />
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setselect(e.target.value)}>
          <option>Select Option</option>
          <option>AC</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setcheckbox(e.target.checked)}/>
        <span>Accept Terms and conditions</span>
        <button>Save</button>
      </form>
    </div>
  );
}

export default FunHome;
