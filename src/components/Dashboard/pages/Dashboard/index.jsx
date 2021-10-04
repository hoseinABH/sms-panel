import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// components
import AnimateGroup from 'components/shared/AnimateGroup';

import {
  NotificationBoard,
  LastReturnedChargesTable,
  SentSMSChart,
  PaperWithTitle,
  StatisticsCard,
  SendAndRecievedSMSChart,
} from '../../components';

// icons
import ShopIcon from '@material-ui/icons/ShoppingCartOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

// styles
import useStyles from './styles';

/**
 * @component Dashboard
 */

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AnimateGroup
        enter={{
          animation: 'transition.slideUpBigIn',
        }}
      >
        <div className={classes.grid}>
          <div className={classes.gridCell}>
            <NotificationBoard />
          </div>

          <div className={classes.gridCell}>
            <StatisticsCard
              backgroundColor={theme.palette.background.statisticsCardInfo}
              icon={ShopIcon}
              title="ماژول غیرفعال"
              value="5"
              action={{ label: 'خرید ماژول' }}
            />
            <StatisticsCard
              backgroundColor={theme.palette.success.main}
              icon={EmailIcon}
              title="مانده حساب پیامک"
              value="1,200,000 ريال"
              action={{
                label: 'افزایش اعتبار',
                onClick: () => history.push('/accounting/message-credit'),
              }}
            />
            <StatisticsCard
              backgroundColor={theme.palette.secondary.main}
              icon={AccountBalanceIcon}
              title="موجودی کیف پول"
              value="1,000,000 ريال"
              action={{
                label: 'افزایش موجودی',
                onClick: () => history.push('/accounting/wallet'),
              }}
            />
          </div>

          <div className={classes.gridCell}>
            <SentSMSChart />
          </div>

          <div className={classes.gridCell}>
            <SendAndRecievedSMSChart />
          </div>

          <div className={classes.gridCell}>
            <PaperWithTitle>
              <LastReturnedChargesTable />
            </PaperWithTitle>
          </div>
        </div>
      </AnimateGroup>
    </div>
  );
}

export default Dashboard;
