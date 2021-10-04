import { useState } from 'react';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

// components
import PaperWithTitle from '../PaperWithTitle';
import LineChart from 'components/shared/charts/Line';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  deactiveButton: {
    opacity: 0.5,
  },
  root: {
    width: '100%',
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 250,
    },
  },
}));

/**
 * @component SendAndRecievedSMSChart
 */
function SendAndRecievedSMSChart() {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const onTabClick = (index) => {
    setActive(index);
  };

  const isActive = (index) => index === active;

  const buttonClasses = (index) => clsx({ [classes.deactiveButton]: !isActive(index) });

  return (
    <PaperWithTitle
      title="آمار ارسال و دریافت پیامک"
      headerChildren={
        <div>
          <Button variant="text" className={buttonClasses(0)} onClick={() => onTabClick(0)}>
            ماهانه
          </Button>
          <Button variant="text" className={buttonClasses(1)} onClick={() => onTabClick(1)}>
            سالانه
          </Button>
        </div>
      }
    >
      <div className={classes.root}>
        <LineChart />
      </div>
    </PaperWithTitle>
  );
}

export default SendAndRecievedSMSChart;
