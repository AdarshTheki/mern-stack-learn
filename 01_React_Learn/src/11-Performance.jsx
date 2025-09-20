import { useState } from "react";
import {data} from './Data'

// Main Components
function LowerState() {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      <button>count : {count}</button>
      <List people={people} />
    </div>
  );
}
export default LowerState;

// Lists - map data 
const List = ({ people }) => {
  console.log("Pass value")
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

// Item - show data
const Person = ({ name }) => {
  console.log("render");
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};