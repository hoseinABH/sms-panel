// providers
import isEqual from 'lodash/isEqual';
import { memo } from 'react';
import { TableProvider } from './providers/TableProvider';

// components
import TableCore from './TableCore';

/**
 * @component Table
 */
function Table(props) {
  return (
    <TableProvider>
      <TableCore {...props} />
    </TableProvider>
  );
}

export default memo(Table, (prevProps, nextProps) => {
  if (isEqual(prevProps.data, nextProps.data)) return true;
  else return false;
});
