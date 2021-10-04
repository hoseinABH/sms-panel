import { makeStyles } from '@material-ui/core/styles';

// components
import PackageCard from 'components/shared/PackageCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// constants
import { SPACING } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },
}));

/**
 * @component OnlineRegisterPackages
 */
function OnlineRegisterPackages() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={SPACING} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تمدید سالانه رایگان"
            usage="کاربری"
            title="پنل رایگان"
            price={0}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="کاربری"
            title="پنل اقتصادی"
            price={72000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="کاربری"
            title="پنل شرکتی"
            price={125000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="کاربری"
            title="پنل تجاری"
            price={114200}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="نمایندگی"
            title="پنل برنزی"
            price={2500000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="نمایندگی"
            title="پنل نقره ای"
            price={44200000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PackageCard
            extension="تخفیف تمدید 50 دصد"
            usage="نمایندگی"
            title="پنل طلایی"
            price={56000000}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OnlineRegisterPackages;
