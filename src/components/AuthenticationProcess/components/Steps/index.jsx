import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// components
import Typography from 'components/shared/Typography';
import Grid from '@material-ui/core/Grid';

// icons
import AccessDenied from 'assets/images/auth-steps/access_denied.svg';
import SelectIcon from 'assets/images/auth-steps/select_package.svg';
import ProfileIcon from 'assets/images/auth-steps/complete_profile.svg';
import DocumentIcon from 'assets/images/auth-steps/document_upload.svg';
import CompeleteIcon from 'assets/images/auth-steps/complete_process.svg';
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    width: 145,
    height: 145,
  },
  disable: {
    opacity: 0.5,
  },
}));

const steps = [
  {
    id: 1,
    title: 'عدم دسترسی',
    img: AccessDenied,
  },
  {
    id: 2,
    title: 'انتخاب پکیج',
    img: SelectIcon,
  },
  {
    id: 3,
    title: 'تکمیل پروفایل',
    img: ProfileIcon,
  },
  {
    id: 4,
    title: 'آپلود مدارک شناسایی',
    img: DocumentIcon,
  },
  {
    id: 5,
    title: 'تکمیل فرآیند',
    img: CompeleteIcon,
  },
];

/**
 * @component Steps
 */
function Steps({ state, setState }) {
  const classes = useStyles();

  return (
    <Grid container spacing={SPACING_HALF} justify="space-around">
      {steps.map((step, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index} className={classes.step}>
            {/* color={state !== step.id ? 'action' : 'primary'} */}
            <img
              src={step.img}
              alt={step.title}
              className={clsx(classes.media, state !== step.id && classes.disable)}
            />
            <Typography color={state !== step.id && 'textSecondary'}>{step.title}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Steps;
