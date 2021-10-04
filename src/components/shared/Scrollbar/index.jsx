import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .ps__thumb-y': {
      right: '2px',
      left: 'unset',
    },
  },
}));

/**
 * @component Scrollbar
 */
function Scrollbar({ children, disabled, ...rest }) {
  const scrollbarRef = useRef();

  const classes = useStyles();

  // useEffect(() => {
  //   if (disabled) return;

  //   function updatePs() {
  //     if (!scrollbarRef.current) {
  //       return;
  //     }
  //     scrollbarRef.current.updateScroll();
  //   }

  //   const interval = setInterval(() => {
  //     updatePs();
  //   }, 500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [disabled]);

  // const Root = useMemo(() => (!!disabled ? 'div' : PerfectScrollbar), [disabled]);
  return (
    <PerfectScrollbar className={classes.root} ref={scrollbarRef} {...rest}>
      {children}
    </PerfectScrollbar>
  );
}

export default Scrollbar;
