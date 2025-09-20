import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const {id} = useParams()
  
  return (
    <div>
      <h1>{id}</h1> 
      Aboput Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
      doloribus aliquid voluptatem suscipit assumenda, nostrum praesentium
      voluptates earum eius eaque laborum at neque necessitatibus, reiciendis
      corporis? Voluptas debitis molestiae esse.
    </div>
  );
};

export default About;
