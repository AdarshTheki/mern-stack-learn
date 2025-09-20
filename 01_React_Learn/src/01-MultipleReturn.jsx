import { useEffect, useState } from "react";

// loading - display loading state
// error - display error massage
// success - display data

const url = "https://api.github.com/users/QuincyLarson";

function MultipleReturn() {

  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          setIsError(true)
          setIsLoad(false)
          return
        }
        const user = await response.json();
        setUsers(user)
      } catch (err) {
        setIsError(true)
        console.log(err);
      }
      setIsLoad(false)
    };
    fetchData();
  }, []);

  if(isLoad){
    return <h2>Loading...</h2>  
  }
  if(isError){
    return <h2>There was a Error...</h2>  
  }

  // Note: destructure alway last initialize
  const {avatar_url, name, company, bio} = users
  return (
    <div>
      <img src={avatar_url} alt={name} width='200' />
      <h2>{name}</h2>
      <h3>
        Work at : <a href='/'>{company}</a>
      </h3>
      <p>{bio}</p>
    </div>
  );
}
export default MultipleReturn;

  // useEffect(() => {
  //   setTimeout(() => {
  //     // done fetching data
  //     setIsLoad(false)
  //   },3000);
  // }, []);
  // if (isLoad) {
  //   return <h2>Loading....</h2>;
  // }