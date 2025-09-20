import { useState } from "react";
import { data } from "./Data.js";

function ModifyValue() {
  const [value, setValue] = useState(0);
  const handleChange = () => {
    setTimeout(() => {
      console.log("Clicked");
      setValue((curr) => {
        return curr + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleChange}>Increase</button>
    </>
  );
}

function ModifyDynamicData() {
  const [person, setPerson] = useState({
    name: "Adarsh",
    age: 24,
    hobby: "Summing a Pull of the Earth",
  });
  const displayPerson = () => {
    setPerson({ ...person, name: "Ayush Verma" });
  };

  return (
    <>
      <h3>
        Name: {person.name} & Age: {person.age}
      </h3>
      <h3>Enjoy: {person.hobby}</h3>
      <button onClick={displayPerson}>Show John</button>
    </>
  );
}

const TodoList = () => {
  const [people, setPeople] = useState(data);
  const clearAllItems = () => {
    setPeople([]);
  };
  const removeItems = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      {people.map((ele) => {
        const { id, name } = ele;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItems(id)}>Remove One</button>
          </div>
        );
      })}
      <button onClick={clearAllItems}>Remove All</button>
    </>
  );
};

const Main = () => {
  return (
    <div>
      <TodoList />
      <hr />
      <ModifyDynamicData />
      <hr />
      <ModifyValue />
    </div>
  );
};

export default Main;
