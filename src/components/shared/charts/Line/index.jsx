import { useTheme } from '@material-ui/core/styles';

import { Line as LineChart } from 'react-chartjs-2';

function Line() {
  const theme = useTheme();

  const dataRender = (canvas) => {
    return {
      labels: [
        '12 am',
        '2 am',
        '4 am',
        '6 am',
        '8 am',
        '10 am',
        '12 pm',
        '2 pm',
        '4 pm',
        '6 pm',
        '8 pm',
        '10 pm',
      ],
      datasets: [
        {
          borderWidth: 2,
          label: 'پیامک دریافتی',
          borderColor: theme.palette.primary.main,
          pointBorderColor: theme.palette.common.white,
          pointBorderWidth: 2,
          pointBackgroundColor: theme.palette.primary.main,
          pointHoverRadius: 8,
          pointRadius: 5,
          fill: 'start',
          backgroundColor: theme.palette.primary.main,
          data: [20, 35, 55, 25, 30, 45, 40, 20, 15, 10, 8, 35, 48, 35, 28, 25, 36],
        },
        {
          borderWidth: 2,
          label: 'پیامک ارسالی',
          borderColor: theme.palette.secondary.main,
          pointBorderColor: theme.palette.common.white,
          pointBorderWidth: 2,
          pointBackgroundColor: theme.palette.secondary.main,
          pointHoverRadius: 8,
          pointRadius: 5,
          fill: 'start',
          backgroundColor: theme.palette.secondary.main,
          data: [200, 400, 200, 320, 280, 350, 250, 450, 260, 300, 275, 356, 475, 460],
        },
      ],
    };
  };

  return (
    <LineChart
      data={dataRender}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: theme.palette.text.secondary,
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20,
              },
              gridLines: {
                drawTicks: false,
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: 'transparent',
                color: theme.palette.divider,
              },
              ticks: {
                padding: 20,
                fontColor: theme.palette.text.secondary,
                fontStyle: 'bold',
              },
            },
          ],
        },
      }}
    />
  );
}

export default Line;
