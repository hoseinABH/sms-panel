import { makeStyles } from '@material-ui/core/styles';

// components
import DoughnutChart from 'components/shared/charts/Doughnut';
import PaperWithTitle from '../PaperWithTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
}));

/**
 * @component SentSMSChart
 */
function SentSMSChart() {
  const classes = useStyles();

  return (
    <PaperWithTitle align="center" title="آمار ارسال های انجام شده">
      <div className={classes.root}>
        <DoughnutChart />
      </div>
    </PaperWithTitle>
  );
}

export default SentSMSChart;
