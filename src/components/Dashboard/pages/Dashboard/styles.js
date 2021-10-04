import { makeStyles } from '@material-ui/core/styles';

// constants
import { SPACING_HALF } from 'constants/spacing';

export default makeStyles((theme) => {
  const gridGap = theme.spacing(SPACING_HALF);
  return {
    root: {
      width: '100%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      rowGap: `${gridGap}px`,
      columnGap: `${gridGap}px`,
    },
    gridCell: {
      height: '100%',
      '& > *': {
        height: '100%',
      },
      '&:nth-child(1)': {
        order: 1,
        gridColumn: 1,
        gridColumnEnd: 4,
        [theme.breakpoints.down('md')]: {
          gridColumn: 1,
          gridColumnEnd: 8,
          order: 1,
        },
      },
      '&:nth-child(2)': {
        order: 2,
        gridColumn: 4,
        gridColumnEnd: 8,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        rowGap: `${gridGap}px`,
        columnGap: `${gridGap}px`,
        [theme.breakpoints.down('md')]: {
          gridColumn: 1,
          gridColumnEnd: 8,
          '& > *': {
            minHeight: 350,
          },
          order: 0,
        },
        [theme.breakpoints.down('xs')]: {
          gridColumn: 1,
          gridColumnEnd: 8,
          display: 'flex',
          flexDirection: 'column',
        },
      },
      '&:nth-child(3)': {
        order: 3,
        gridColumn: 1,
        gridColumnEnd: 2,
        [theme.breakpoints.down('md')]: {
          gridColumn: 1,
          gridColumnEnd: 8,
        },
      },
      '&:nth-child(4)': {
        order: 4,
        gridColumn: 2,
        gridColumnEnd: 8,
        [theme.breakpoints.down('md')]: {
          gridColumn: 1,
          gridColumnEnd: 8,
        },
      },
      '&:nth-child(5)': {
        order: 5,
        gridColumn: 1,
        gridColumnEnd: 8,
      },
    },
  };
});
