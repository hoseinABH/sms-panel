import { useState } from 'react';

// components
import { DraftTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import Input from 'components/shared/Input';
import SMSTextField from 'components/Messages/components/SMSTextField';
import LoadingButton from 'components/shared/LoadingButton';
import Dialog from 'components/shared/DialogImproved';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// icons
import UserSettingsIcon from 'components/shared/icons/UserSetting';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

/**
 * @component Draft
 */
function Draft() {
  const [open, setOpen] = useState(false);
  const onDialogOpen = () => {
    setOpen(true);
  };
  return (
    <PageWithTitle title="تنظیمات کاربری" contentTitle="پیش نویس ها" icon={UserSettingsIcon}>
      <Grid container spacing={SPACING_HALF} alignItems="center" justify="space-between">
        <Grid item xs={12} md={6}>
          <Input type="search" fullWidth name="search" label="جستجو" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
            <LoadingButton
              fullWidth
              onClick={onDialogOpen}
              variant="contained"
              color="success"
              size="small"
            >
              افزودن متن جدید
            </LoadingButton>
            <Box mx={{ xs: 0, sm: SPACING_HALF }} my={{ xs: SPACING_LEAST, sm: 0 }} />

            <LoadingButton fullWidth variant="contained" color="primary" size="small">
              جتسجو
            </LoadingButton>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <DraftTable />
        </Grid>
      </Grid>

      <Dialog
        title="متن پیش نویس"
        open={open}
        successButtonText="ثبت"
        onClose={() => setOpen(false)}
      >
        <SMSTextField title="متن " />
      </Dialog>
    </PageWithTitle>
  );
}

export default Draft;
