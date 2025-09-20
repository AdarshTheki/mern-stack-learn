import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

// create context:-
export const NavBarContext = createContext();

// custom hooks create to export with use method
export const useAppContext = () => useContext(NavBarContext);

const ContextAPI = () => {
    const [user, setUser] = useState({ name: 'bob' });
    const logout = () => {
        setUser(null);
    };
    return (
        <NavBarContext.Provider value={{ user, logout }}>
            <h3>Context API</h3>
            <NavLinks user={user} logout={logout} />
        </NavBarContext.Provider>
    );
};
export default ContextAPI;

// props drilling
const NavLinks = ({ user, logout }) => {
    return (
        <div>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
            </ul>
            <UserContainer user={user} logout={logout} />
        </div>
    );
};

const UserContainer = () => {
    // used direct to useContext and NavBarContext
    // const { user, logout } = useContext(NavBarContext);
    const { user, logout } = useAppContext();
    return (
        <div>
            {user ? (
                <div>
                    <p>Hello There, {user?.name?.toUpperCase()}</p>
                    <button onClick={logout}>logout</button>
                </div>
            ) : (
                <p>Please LogIn</p>
            )}
        </div>
    );
};
