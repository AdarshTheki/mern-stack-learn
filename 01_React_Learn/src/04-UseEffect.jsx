import { useState } from "react";
import { useEffect } from "react";

/**
 * It is used to Data fetching, Subscriptions, Manual changes to DOM etc.
 * Only one time page rerender when page load.
 * Can you useState use or update to rerender the useEffect.
 * Not used to inside of if else condition.
 **/

const url = "https://api.github.com/users";

const FetchComponents = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError("something wrong");
          setLoading(false);
          return;
        }
        const res = await response.json();
        setUsers(res)
      } catch (err) {
        setError(err.message);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if(loading){
    return <h2>Loading...!</h2>
  }

  return (
    <div>
      <h3>Github Users</h3>
      { error && "Some things was wrongs"}
      <ul>
        {users.map((ele) => {
          const { id, login, avatar_url, html_url } = ele;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} width='50px' />
              <p>
                Name:{login} & Link: <a href={html_url}>Profile</a>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchComponents;
