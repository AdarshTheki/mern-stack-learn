// This is Vanilla javascript process:-
import { useState } from "react";

function FormsAPI() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log("Data:", newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Form Data API</h3>
        <label htmlFor=''>Name: </label>
        <input type='text' name='name' />
        <br />
        <label htmlFor=''>Email: </label>
        <input type='text' name='email' />
        <br />
        <label htmlFor=''>Password: </label>
        <input type='text' name='password' />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormsAPI;
