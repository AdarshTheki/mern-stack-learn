import React from "react";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetAllTodos {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        username
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
