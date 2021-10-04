// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

// icons
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RepeatIcon from '@material-ui/icons/Repeat';

// fakeData
import data from './data.json';

/**

/**
* @component ContactSendTable
*/
function ContactSendTable() {
  return (
    <Table
      tableDescription="لیست پیامک های ارسالی صالح زارعی [2000]"
      columns={[
        {
          field: 'title',
          title: 'عنوان',
        },
        {
          field: 'sender',
          title: 'فرستنده',
          render: (row) => <Typography>{row.sender}</Typography>,
        },

        {
          field: 'count',
          title: 'تعداد',
          render: (row) => <Typography color="info">{row.count}</Typography>,
        },
        {
          field: 'sendNumber',
          title: 'شناسه ارسال',
          render: (row) => <Typography>{row.sendNumber}</Typography>,
        },
        {
          field: 'date/time',
          title: 'تاریخ و ساعت',
          render: (row) => <Typography>{new Date().toLocaleString('fa-IR')}</Typography>,
        },
        {
          field: 'status',
          title: 'وضعیت ارسال',
          render: (row) => `${row.status === 'sent' ? 'ارسال شده' : 'در صف ارسال'}`,
        },
        {
          field: 'sendPrice',
          title: 'مبلغ ارسال',
          render: (row) => (
            <Box display="flex" justifyContent="center">
              <Typography color="error.light" useComma>
                {row.sendPrice}
              </Typography>
              <Typography withRials color="error.light">
                -
              </Typography>
            </Box>
          ),
        },
        {
          field: 'returnedPrice',
          title: 'مبلغ برگشتی',
          render: (row) => (
            <Typography withRials useComma>
              {row.returnedPrice}
            </Typography>
          ),
        },
        {
          field: 'messageText',
          title: 'متن پیام',
        },
      ]}
      data={data}
      actions={[
        {
          label: 'ثبت',
          icon: (
            <IconButton>
              <EventAvailableIcon />
            </IconButton>
          ),
        },
        {
          label: 'تکرار',
          icon: (
            <IconButton>
              <RepeatIcon />
            </IconButton>
          ),
        },
        {
          label: 'ذخیره',
          icon: (
            <IconButton>
              <SaveAltIcon />
            </IconButton>
          ),
        },
        {
          label: 'خوانده شده',
          icon: (
            <IconButton>
              <DoneAllIcon />
            </IconButton>
          ),
        },
      ]}
    />
  );
}

export default ContactSendTable;
