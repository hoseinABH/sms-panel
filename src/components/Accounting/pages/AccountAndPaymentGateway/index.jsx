import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { AccountAndGatewaysTable, AddNewAccountModal } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import LoadingButton from 'components/shared/LoadingButton';
import Notification from 'components/shared/Notification';

// icons
import AccountingIcon from '@material-ui/icons/LocalAtmOutlined';

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

  notificationWrapper: {
    width: '100%',
    marginBottom: theme.spacing(SPACING_THIRD),
  },
}));

/**
 * @component AccountAndPaymentGateway
 */
function AccountAndPaymentGateway() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWithTitle title="مدیریت مالی" contentTitle="حساب و درگاه" icon={AccountingIcon}>
      <div className={classes.root}>
        <div className={classes.actions}>
          <LoadingButton
            onClick={() => setOpenModal(true)}
            className={classes.addNumberButton}
            variant="contained"
            color="success"
          >
            افزودن حساب جدید
          </LoadingButton>
        </div>
        <div className={classes.notificationWrapper}>
          <Notification
            normalText
            type="info"
            variant="outlined"
            primaryText="برای نمایش همزمان اطلاعات حساب بانکی در قسمت درج فیش واریزی و درگاه آنلاین همان بانک در لیست درگاه ها ، زمان انتخاب نوع پرداخت گزینه درگاه و ثبت فیش را انتخاب نمایید درگاه بانک پارسیان : فقط کافیست کد پذیرنده(میرچند ای دی) را که از دریافت کرده اید را در بخش کد پذیرنده وارد نموده و درگاه را روی پارسیان تنظیم کنید.   درگاه بانم ملت : کد ترمینال را در بخش کد پذیرنده ، نام کاربری را در بخش نام کاربری و رمز را در بخش رمز عبور وارد نموده و درگاه را روی ملت تنظیم نمایید.     درگاه بانک سامان:شماره پذیرنده را در بخش کد پذیرنده وارد نمایید و درگاه را روی سامان تنظیم کنید "
          />
        </div>

        <AccountAndGatewaysTable />

        <AddNewAccountModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </PageWithTitle>
  );
}

export default AccountAndPaymentGateway;
