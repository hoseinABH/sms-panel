import { useContext, useState, createContext, useEffect } from 'react';

const defualtValue = {};

// initialize user context
const UserContextValue = createContext(defualtValue);
const UserContextSetState = createContext(() => null);

/**
 * @provider UserProvider
 * @summary user provider use this at top of the react tree to get user data on every level
 * @param {ReactNode} children
 */
function UserProvider({ children, user = defualtValue }) {
  const [_user, setUser] = useState(user);

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <UserContextValue.Provider value={_user}>
      <UserContextSetState.Provider value={setUser}>{children}</UserContextSetState.Provider>
    </UserContextValue.Provider>
  );
}

/**
 * @function useUserState
 * @summary returns user state and user set state just like out trusty useState
 * @returns {UserUsersStateType} tuple of user and setUser
 */

function useUserState() {
  const user = useContext(UserContextValue);
  const setUser = useContext(UserContextSetState);
  const state = [user, setUser];
  return state;
}

/**
 * @function useUserValue
 * @summary returns user state as partial
 * @returns {Partial<user>} user
 */
function useUserValue() {
  const user = useContext(UserContextValue);
  return user;
}

/**
 * @function useUserSetState
 * @summary returns user set state
 * @returns {SetStateAction<user>} setUser
 */
function useUserSetState() {
  const setUser = useContext(UserContextSetState);
  return setUser;
}

export { UserProvider, useUserState, useUserValue, useUserSetState };
