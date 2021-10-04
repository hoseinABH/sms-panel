import { makeStyles } from '@material-ui/core/styles';

// components
import { PackagesTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
// constants
import { SPACING_HALF } from 'constants/spacing';

// icons
import UserSettingsIcon from 'components/shared/icons/UserSetting';

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component Packages
 */
function Packages() {
  const classes = useStyles();

  return (
    <PageWithTitle
      title="تنظیمات کاربری"
      contentTitle="پکیج و تعرفه پیامک شما"
      icon={UserSettingsIcon}
    >
      <div className={classes.table}>
        <PackagesTable />
      </div>
    </PageWithTitle>
  );
}

export default Packages;
