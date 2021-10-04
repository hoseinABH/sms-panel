import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { WebserviceRoutesTable, AddNewRouteModal } from '../../../components';
import LoadingButton from 'components/shared/LoadingButton';

// constants
import { SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING_THIRD),
    paddingBottom: theme.spacing(SPACING_THIRD),
  },
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(SPACING_THIRD),
  },
  addNumberButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

/**
 * @component WebServiceRoute
 */
function WebServiceRoute() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <LoadingButton
          onClick={() => setOpenModal(true)}
          className={classes.addNumberButton}
          variant="contained"
          color="success"
        >
          افزودن مسیر جدید
        </LoadingButton>
      </div>

      <WebserviceRoutesTable />
      <AddNewRouteModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default WebServiceRoute;
