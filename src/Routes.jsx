import { lazily } from 'react-lazily';
import { lazy } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// templates
import DefaultTemplate from 'templates/DefaultTemplate';

// components
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

// providers
import { useNavigationDrawerState } from 'providers/NavigationDrawerProvider';
import { Suspense } from 'react';

// Pages
import {
  Login,
  Register,
  ForgetPassword,
  AccountInfo,
  ConfirmCode,
  VerifyForget,
  ResetPassword,
} from 'components/LoginRegisterProcess';
import AccessDenied from 'components/AccessDenied';

const Dashboard = lazy(() => import('components/Dashboard'));
const SendMessage = lazy(() => import('components/Messages'));
const {
  ContactSendReport,
  P2PSendReport,
  IncomingMessageReport,
  ReturnedCharges,
  NormalSendReport,
} = lazily(() => import('components/Reports'));

const { ContactList, ContactGroup } = lazily(() => import('components/Contacts'));

const { UserNotifications, Draft, Profile, Packages } = lazily(() =>
  import('components/UserSettings')
);

const { DefaultPackageAndTarif, CreateTarif } = lazily(() =>
  import('components/PackageAndTarifs')
);

const {
  Transactions,
  Payments,
  Wallet,
  MessageCredit,
  AccountAndPaymentGateway,
} = lazily(() => import('components/Accounting'));

const { LinesList, LineOrder } = lazily(() => import('components/LinesManagement'));

const { Users } = lazily(() => import('components/UsersManagement'));

const { ProfileAuth } = lazily(() => import('components/UserAuthentication'));

const { AuthProcess } = lazily(() => import('components/AuthenticationProcess'));

const { Branding, WebServices } = lazily(() => import('components/SystemSettings'));

const { CreateTicket, Ticket, Tickets, Notifications } = lazily(() =>
  import('components/Support')
);

/**
 * @component Routes
 */
function Routes() {
  const [navigationDrawer, setNavigationDrawer] = useNavigationDrawerState();
  const history = useHistory();
  history.listen(() => {
    setNavigationDrawer({ ...navigationDrawer, open: false });
    window.scrollTo(0, 0);
  });

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/verify-forget" component={VerifyForget} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/confirm-code" component={ConfirmCode} />
      <Route path="/account-info" component={AccountInfo} />
      <Route>
        <DefaultTemplate>
          <Suspense
            fallback={
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                alignItems="center"
                top={0}
                left={0}
                right={0}
                bottom={0}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Switch>
              <Route component={Dashboard} path={'(/|/dashboard)'} />

              <Route path="/access-denied" component={AccessDenied} />

              <Route component={SendMessage} path={'/message/new'} />

              <Route component={NormalSendReport} path={'/reports/normal-sends'} />
              <Route component={ContactSendReport} path={'/reports/contact-sends'} />
              <Route component={P2PSendReport} path={'/reports/p2p-sends'} />
              <Route component={IncomingMessageReport} path={'/reports/incoming-messages'} />
              <Route component={ReturnedCharges} path={'/reports/returned-charges'} />

              <Route component={ContactList} exact path={'/contacts'} />
              <Route component={ContactGroup} path={'/contacts/groups/:id'} />
              <Route component={ContactGroup} path={'/contacts/groups'} />

              <Route component={Profile} path={'/setting/profile'} />
              <Route component={UserNotifications} path={'/setting/notifications'} />
              <Route component={Draft} path={'/setting/drafts'} />
              <Route component={Packages} path={'/setting/packages'} />

              <Route component={DefaultPackageAndTarif} path={'/packages-tarifs/defaults'} />
              <Route component={CreateTarif} path={'/packages-tarifs/create-tarif'} />

              <Route component={Transactions} path={'/accounting/transactions'} />
              <Route component={Payments} path={'/accounting/payments'} />
              <Route component={Wallet} path={'/accounting/wallet'} />
              <Route component={MessageCredit} path={'/accounting/message-credit'} />
              <Route
                component={AccountAndPaymentGateway}
                path={'/accounting/gateway-account'}
              />
              <Route component={Users} path={'/user-manager/users'} />

              <Route component={LinesList} exact path={'/lines'} />
              <Route component={LineOrder} exact path={'/lines/order'} />

              <Route component={AuthProcess} path={'/auth-process'} />
              <Route component={ProfileAuth} path={'/authentication'} />

              <Route component={WebServices} path={'/system/webservices'} />
              <Route component={Branding} path={'/system/branding'} />

              <Route component={Tickets} exact path={'/support/tickets'} />
              <Route component={CreateTicket} exact path={'/support/tickets/new'} />
              <Route component={Ticket} exact path={'/support/tickets/:id'} />
              <Route component={Notifications} exact path={'/support/notifications'} />
            </Switch>
          </Suspense>
        </DefaultTemplate>
      </Route>
    </Switch>
  );
}

export default Routes;
