import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const {isLoading, isError, user} = useFetch(url)
  // order matter
  // don't place user JSX before loading or error
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>There was an Error...</h2>
  }
  const {avatar_url, name, company, bio} = user
  return (
    <div>
      <h3>Github Users</h3>
      <img src={avatar_url} alt={name} width='50px' />
      <div>{name}</div>
      <h2>{company}</h2>
      <h2>{bio}</h2>
    </div>
  );
}
export default FetchData;


// Custom Hooks to useFetch Data:
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // change state value
  const [data, setData] = useState(null);
  useEffect(() => {
    // change name
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      // hide loading
      setIsLoading(false);
    };
    // invoke fetch data
    fetchData();
  }, []);
  return { isLoading, isError, data };
};