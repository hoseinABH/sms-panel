import { useContext, useState, createContext } from 'react';

const defaultValue = { open: false, folded: false, foldedOpen: false };

// initialize navigationDrawer context
const NavigationDrawerContextValue = createContext(defaultValue);
const NavigationDrawerContextSetState = createContext(() => null);

/**
 * @provider NavigationDrawerProvider
 * @summary navigationDrawer provider use this at top of the react tree to get navigationDrawer data on every level
 * @param {ReactNode} children
 */
function NavigationDrawerProvider({ children }) {
  const [navigationDrawer, setNavigationDrawer] = useState(defaultValue);
  return (
    <NavigationDrawerContextValue.Provider value={navigationDrawer}>
      <NavigationDrawerContextSetState.Provider value={setNavigationDrawer}>{children}</NavigationDrawerContextSetState.Provider>
    </NavigationDrawerContextValue.Provider>
  );
}

/**
 * @function useNavigationDrawerState
 * @summary returns navigationDrawer state and navigationDrawer set state just like out trusty useState
 * @returns {[boolean, Dispatch<SetStateAction<boolean>>]} tuple of navigationDrawer and setNavigationDrawer
 */
function useNavigationDrawerState() {
  const navigationDrawer = useContext(NavigationDrawerContextValue);
  const setNavigationDrawer = useContext(NavigationDrawerContextSetState);
  const state = [navigationDrawer, setNavigationDrawer];
  return state;
}

/**
 * @function useNavigationDrawerValue
 * @summary returns navigationDrawer state as partial
 * @returns {boolean} navigationDrawer
 */
function useNavigationDrawerValue() {
  const navigationDrawer = useContext(NavigationDrawerContextValue);
  return navigationDrawer;
}

/**
 * @function useNavigationDrawerSetState
 * @summary returns navigationDrawer set state
 * @returns {Dispatch<SetStateAction<boolean>>} setNavigationDrawer
 */
function useNavigationDrawerSetState() {
  const setNavigationDrawer = useContext(NavigationDrawerContextSetState);
  return setNavigationDrawer;
}

export { NavigationDrawerProvider, useNavigationDrawerState, useNavigationDrawerValue, useNavigationDrawerSetState };
