import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { WebserviceLinesTable, AddNumberToWebserviceModal } from '../../../components';

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
 * @component WebServiceLines
 */
function WebServiceLines() {
  const classes = useStyles();
  const [openAddNumberModal, setOpenAddNumberModal] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <LoadingButton
          onClick={() => setOpenAddNumberModal(true)}
          className={classes.addNumberButton}
          variant="contained"
          color="success"
        >
          افزودن شماره
        </LoadingButton>
      </div>

      <WebserviceLinesTable />
      <AddNumberToWebserviceModal
        open={openAddNumberModal}
        onClose={() => setOpenAddNumberModal(false)}
      />
    </div>
  );
}

export default WebServiceLines;
