import { useContext, useState, createContext } from 'react';

import { once } from 'lodash';

// initialize tableSelected context
const createTableContextValue = once(() => createContext([]));
const createTableContextSetState = once(() => createContext(() => null));

/**
 * @provider TableProvider
 * @summary table provider use this at top of the react tree to get tableSelected data on every level
 * @param {ReactNode} children
 */
function TableProvider({ children }) {
  const TableContextValue = createTableContextValue();
  const TableContextSetState = createTableContextSetState();

  const [tableSelected, setTableSelected] = useState([]);

  return (
    <TableContextValue.Provider value={tableSelected}>
      <TableContextSetState.Provider value={setTableSelected}>
        {children}
      </TableContextSetState.Provider>
    </TableContextValue.Provider>
  );
}

/**
 * @function useTableState
 * @summary returns tableSelected state and tableSelected set state just like out trusty useState
 */
function useTableState() {
  const tableSelected = useContext(createTableContextValue());
  const setTableSelected = useContext(createTableContextSetState());
  const state = [tableSelected, setTableSelected];
  return state;
}

/**
 * @function useTableValue
 * @summary returns tableSelected statel
 */
function useTableValue() {
  const tableSelected = useContext(createTableContextValue());
  return tableSelected;
}

/**
 * @function useTableSetState
 * @summary returns tableSelected set state
 * @returns {Dispatch<SetStateAction<boolean>>} setTableSelected
 */
function useTableSetState() {
  const setTableSelected = useContext(createTableContextSetState());
  return setTableSelected;
}

export { TableProvider, useTableState, useTableValue, useTableSetState };
