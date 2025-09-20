import { useState } from "react";

function Operators() {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Adarsh");
  const [user, setUser] = useState({ name: "Ayush" });
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <h2>{text || "Default Value"}</h2>
      {text && (
        <div>
          <h2>Whatever First Return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <SomeOne naming={user.name}/>}

      <button onClick={()=>setIsEdit(!isEdit)}>{isEdit ? "Edit" : "Add"}</button>
    </div>
  );
}
export default Operators;

const SomeOne = ({ naming }) =>{
  return(
    <div>
      <h2>WhatEver Second Return</h2>
      <h2>{naming}</h2>
    </div>
  )
}
