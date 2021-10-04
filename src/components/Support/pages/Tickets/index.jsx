import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// components
import { TicketHeader, TicketsTable } from '../../components';

import PageWithTitle from 'components/shared/PageWithTitle';
import LoadingButton from 'components/shared/LoadingButton';

// icons
import SupportIcon from '@material-ui/icons/Help';

// constants
import { SPACING, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },
  table: {
    marginTop: theme.spacing(SPACING_HALF),
  },
  actions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(SPACING_HALF),
  },

  createTicketButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

/**
 * @component Tickets
 */
function Tickets() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <PageWithTitle title="پشتیبانی" contentTitle="تیکت ها" icon={SupportIcon}>
      <div className={classes.root}>
        <TicketHeader />
        <div className={classes.actions}>
          <LoadingButton
            className={classes.createTicketButton}
            onClick={() => history.push('/support/tickets/new')}
            variant="contained"
            color="success"
          >
            ثبت تیکت
          </LoadingButton>
        </div>
        <div className={classes.table}>
          <TicketsTable />
        </div>
      </div>
    </PageWithTitle>
  );
}

export default Tickets;
