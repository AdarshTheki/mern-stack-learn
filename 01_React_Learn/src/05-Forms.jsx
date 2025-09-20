// Contact Forms Submit the Data:-
import { useState } from "react";

const Forms = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };

  return (
    <div>
      <h2>Contact Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={users.name}
          onChange={changeHandler}
          name='name'
          placeholder='Enter Name'
        />
        <br />
        <input
          type='email'
          value={users.email}
          onChange={changeHandler}
          name='email'
          placeholder='Enter Email'
        />
        <br />
        <input
          type='password'
          value={users.password}
          onChange={changeHandler}
          name='password'
          placeholder='Enter Password'
        />
        <br />
        <button>Submit</button>
      </form>
      <br />
    </div>
  );
};


function OtherInputs() {
  const frameWorks = ["React", "Angular", "Vue", "Svelte"];
  const [shipping, setShipping] = useState(false);
  const [frameWork, setFrameWork] = useState("React");
  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };
  const handleFrameWorks = (e) => {
    setFrameWork(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(shipping, frameWork)
  }
  return (
    <>
      <h2>Other Inputs</h2>
      <form>
        <label htmlFor=''>Free Shipping: </label>
        <input
          type='checkbox'
          name='shipping'
          checked={shipping}
          onChange={handleShipping}
        />
        <br />
        <label>Frame Works: </label>
        <select name='frameWork' value={frameWork} onChange={handleFrameWorks}>
          {frameWorks.map((frame) => {
            return <option key={frame}>{frame}</option>;
          })}
        </select>
        <br />
        <button onClick={SubmitHandler}>Submit</button>
      </form>
    </>
  );
}

const Main = () => {
  return (
    <>
      <Forms />
      <hr />
      <OtherInputs />
    </>
  );
};
export default Main;
