import { makeStyles } from '@material-ui/core/styles';

// components
import { UsersTable } from '../../../components';
import LoadingButton from 'components/shared/LoadingButton';

// constants
import { SPACING_HALF, SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginBottom: theme.spacing(SPACING_HALF),
    width: '100%',
  },
  root: {
    padding: theme.spacing(SPACING_THIRD, 0),
  },
}));

/**
 * @component UsersList
 */
function UsersList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.actionWrapper}>
        <LoadingButton color="success" variant="contained">
          ایجاد کاربر
        </LoadingButton>
      </div>
      <UsersTable />
    </div>
  );
}

export default UsersList;
