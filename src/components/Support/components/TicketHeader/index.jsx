// components
import Grid from '@material-ui/core/Grid';
import TicketCard from '../TicketCard';

// constants
import { SPACING } from 'constants/spacing';

// icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/MailOutline';
import DraftsIcon from '@material-ui/icons/DraftsOutlined';
import MarkAsRead from 'components/shared/icons/MarkAsRead';

/**
 * @component TicketHeader
 */
function TicketHeader() {
  return (
    <Grid container spacing={SPACING}>
      <Grid item xs={12} md={6} lg={3}>
        <TicketCard title="کل تیکت ها" value={50} color="grey" icon={InboxIcon} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TicketCard title="بررسی نشده" value={5} color="error.light" icon={MailIcon} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TicketCard title="درحال بررسی" value={3} color="purple" icon={DraftsIcon} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TicketCard title="حل شده" value={42} color="success" icon={MarkAsRead} />
      </Grid>
    </Grid>
  );
}

export default TicketHeader;
