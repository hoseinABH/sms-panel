import { useTheme } from '@material-ui/core/styles';

import { Doughnut as DoughnutChart } from 'react-chartjs-2';
import { Chart } from 'chart.js';

import { makeStyles } from '@material-ui/core/styles';

import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// components
import Typography from 'components/shared/Typography';

Chart.defaults.global.defaultFontFamily = 'IRANYekanWeb, Poppins, sans-serif';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  legendContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(SPACING_HALF),
  },
  legend: {
    borderRadius: theme.shape.borderRadius,
    width: 12,
    height: 12,
    marginRight: theme.spacing(SPACING_LEAST),
  },
  legendLabel: {},
  percentage: {
    fontWeight: 'bold',
    margin: theme.spacing(SPACING_LEAST, 0),
  },
  chartContent: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const calculatePercentage = (a, total) => {
  return Math.floor((a * 100) / total);
};

function Doughnut() {
  const classes = useStyles();

  const theme = useTheme();

  const chartData = {
    labels: ['موفق', 'ناموفق'],
    datasets: [
      {
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: [theme.palette.success.light, theme.palette.error.light],
        percentageColor: ['success', 'error'],
        data: [230, 120],
      },
    ],
  };

  return (
    <div className={classes.root}>
      <DoughnutChart
        data={chartData}
        options={{
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          responsive: false,
          legend: {
            display: false,
          },
        }}
      />

      <div className={classes.chartContent}>
        <div className={classes.legendContainer}>
          {chartData.labels.map((label, key) => {
            const dataset = chartData.datasets[0];
            return (
              <div className={classes.categoryContainer} key={key}>
                <Typography gutterBottom className={classes.legendLabel}>
                  {label}
                </Typography>

                <Typography className={classes.percentage}>{dataset.data[key]}</Typography>
                <Typography
                  color={dataset.percentageColor[key]}
                  className={classes.percentage}
                >
                  {`${calculatePercentage(
                    dataset.data[key],
                    dataset.data.reduce((a, b) => a + b, 0)
                  )}%`}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doughnut;
