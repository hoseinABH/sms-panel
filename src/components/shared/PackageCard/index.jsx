import { makeStyles } from '@material-ui/core/styles';
// components
import Paper from '@material-ui/core/Paper';
import Typography from 'components/shared/Typography';

import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';
import LoadingButton from 'components/shared/LoadingButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing(SPACING_HALF),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primarySection: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
    padding: theme.spacing(SPACING_HALF),
  },
  priceWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  price: {
    display: 'flex',
  },
  strikediag: {
    background: `linear-gradient(to right top, transparent 47.75%, ${theme.palette.error.main} 49.5%, ${theme.palette.error.main} 50.5%, transparent 52.25%)`,
    padding: '0 0.15em',
    display: 'flex',
  },
  amount: {
    marginRight: theme.spacing(SPACING_LEAST),
  },

  advantages: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
  },
}));
const advantages = [
  {
    id: 1,
    title: 'امکانات محدود',
  },
  {
    id: 2,
    title: 'بدون خط اختصاصی',
  },
  {
    id: 3,
    title: 'بدون وبسرویس',
  },
  {
    id: 4,
    title: 'بدون وبسرویس خدماتی',
  },
  {
    id: 5,
    title: 'تعرفه هر پیامک 220 ریال',
  },
  {
    id: 6,
    title: 'شارژ رایگان 0 ریال',
  },
];
/**
 * @component PackageCard
 */
function PackageCard({ title, price, offPrice, onSelect = () => {}, usage, extension }) {
  const classes = useStyles();

  const onSelectPackage = () => {
    onSelect();
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.heading}>
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography gutterBottom variant="overline">
          مناسب آشنایی با سامانه
        </Typography>
        <Typography color="textSecondary" variant="overline">
          {usage}
        </Typography>
      </div>
      <div className={classes.primarySection}>
        <div className={classes.priceWrapper}>
          {offPrice && (
            <span className={classes.strikediag}>
              <Typography color="inherit" component="span" className={classes.amount}>
                {offPrice}
              </Typography>
              <Typography color="inherit">ریال</Typography>
            </span>
          )}
          <div className={classes.price}>
            <Typography className={classes.amount} useComma align="center" color="inherit">
              {price}
            </Typography>
            <Typography color="inherit">ریال</Typography>
          </div>
        </div>
        <Typography color="inherit">سالانه</Typography>
      </div>
      <div className={classes.advantages}>
        {advantages.map((adv) => (
          <Typography gutterBottom key={adv.id} variant="body2">
            {adv.title}
          </Typography>
        ))}
      </div>
      <div className={classes.action}>
        <LoadingButton onClick={onSelectPackage} variant="contained" color="success">
          انتخاب
        </LoadingButton>
      </div>
      <Typography align="center" variant="body2">
        {extension}
      </Typography>
    </Paper>
  );
}

export default PackageCard;
