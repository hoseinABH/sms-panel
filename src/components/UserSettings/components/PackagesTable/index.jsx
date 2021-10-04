import { makeStyles } from '@material-ui/core/styles';
import { addCommas } from 'persian-tools2';

// components
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import Paper from '@material-ui/core/Paper';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(SPACING_HALF),
  },
  paper: {
    border: '1px solid #dddd',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 0,
  },
}));

const testData = [
  {
    id: 0,
    sendType: 'ارسال 1000',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
  {
    id: 1,
    sendType: 'ارسال 02',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
  {
    id: 2,
    sendType: 'وبسرویس خدماتی',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
];

/**
 * @component PackagesTable
 */
function PackagesTable() {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.title} align="center">
          جدول تعرفه هر پیامک بر اساس اپراتور
        </Typography>
      </Paper>
      <SimpleTable
        title="پکیج شما (کاربر شرکتی)"
        titleAlign="center"
        columns={[
          {
            field: 'sendType',
            title: 'نوع ارسال',
            render: (row) => <Typography>{row.sendType}</Typography>,
          },
          {
            field: 'mciFa',
            title: 'همراه اول فارسی',
            render: (row) => <Typography>{addCommas(row.mciFa)} ريال</Typography>,
          },
          {
            field: 'mciEn',
            title: 'همراه اول انگلیسی',
            render: (row) => <Typography>{addCommas(row.mciEn)} ريال</Typography>,
          },
          {
            field: 'mtnFa',
            title: 'ایرانسل فارسی',
            render: (row) => <Typography>{addCommas(row.mtnFa)} ريال</Typography>,
          },
          {
            field: 'mtnEn',
            title: 'ایرانسل انگلیسی',
            render: (row) => <Typography>{addCommas(row.mtnEn)} ريال</Typography>,
          },
          {
            field: 'otherFa',
            title: 'سایر خطوط فارسی',
            render: (row) => <Typography>{addCommas(row.otherFa)} ريال</Typography>,
          },
          {
            field: 'otherEn',
            title: 'سایر خطوط انگلیسی',
            render: (row) => <Typography>{addCommas(row.otherEn)} ريال</Typography>,
          },
        ]}
        data={testData}
      />
    </>
  );
}

export default PackagesTable;
