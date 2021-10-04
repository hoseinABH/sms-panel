import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { DefaultPackagesTable, CreatePackageModal } from '../../../components';
import LoadingButton from 'components/shared/LoadingButton';

// constants
import { SPACING } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },

  actions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(SPACING),
  },
  createPackageButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

/**
 * @component DefaultPackages
 */
function DefaultPackages() {
  const classes = useStyles();
  const [createPackageModal, setCreatePackageModal] = useState(false);
  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <LoadingButton
          className={classes.createPackageButton}
          size="small"
          variant="contained"
          color="success"
          onClick={() => setCreatePackageModal(true)}
        >
          ایجاد پکیج جدید
        </LoadingButton>
      </div>

      <DefaultPackagesTable />

      <CreatePackageModal
        open={createPackageModal}
        onClose={() => setCreatePackageModal(false)}
      />
    </div>
  );
}

export default DefaultPackages;
