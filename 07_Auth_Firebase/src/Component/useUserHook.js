import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from './firebaseConfig';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (getUser) => {
      if (getUser) {
        setUser(getUser);
        setIsLoading(false);
        console.log('successful in useUser Hooks!');
      } else {
        console.log('somethings error in useUser Hooks!');
        setUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  return { user, isLoading };
};

export default useUser;
