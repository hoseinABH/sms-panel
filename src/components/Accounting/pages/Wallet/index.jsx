// components
import PageWithTab from 'components/shared/PageWithTab';
import OnlinePayment from './OnlinePayment';
import DepositSlip from './DepositSlip';

// icons
import AccountingIcon from '@material-ui/icons/LocalAtmOutlined';

/**
 * @component Wallet
 */
function Wallet() {
  return (
    <PageWithTab
      pages={[
        {
          title: 'پرداخت آنلاین',
          content: <OnlinePayment />,
        },
        {
          title: 'ثبت فیش واریزی',
          content: <DepositSlip />,
        },
      ]}
      title="مدیریت مالی"
      icon={AccountingIcon}
    />
  );
}

export default Wallet;
