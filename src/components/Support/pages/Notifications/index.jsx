import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { NotificationsTable, CreateNotificationModal } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import LoadingButton from 'components/shared/LoadingButton';

// icons
import SupportIcon from '@material-ui/icons/Help';

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
 * @component Notifications
 */
function Notifications() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWithTitle title="پشتیبانی" contentTitle="اعلان ها" icon={SupportIcon}>
      <div className={classes.root}>
        <div className={classes.actions}>
          <LoadingButton
            onClick={() => setOpenModal(true)}
            className={classes.addNumberButton}
            variant="contained"
            color="success"
          >
            درج اعلان
          </LoadingButton>
        </div>
      </div>
      <NotificationsTable />
      <CreateNotificationModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageWithTitle>
  );
}

export default Notifications;
