import { useState } from 'react';
import { addCommas } from 'persian-tools2';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';

// fakeData
import lines from './lines.json';

/**
 * @component WebserviceLinesTable
 */
function WebserviceLinesTable() {
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);
  return (
    <Table
      disableSelect
      columns={[
        {
          field: 'lineNumber',
          title: 'شماره خط',
          render: (row) => <Typography>{row.lineNumber}</Typography>,
        },
        {
          field: 'name',
          title: 'نام وبسرویس',
          render: (row) => <Typography>{row.name}</Typography>,
        },
        {
          field: 'length',
          title: 'ارقام',
          render: (row) => <Typography>{row.length} رقمی</Typography>,
        },
        {
          field: 'purchaseType',
          title: 'نوع خرید',
        },
        {
          field: 'sendType',
          title: 'نوع ارسال',
        },
        {
          field: 'linkShare',
          title: 'ارسال لینک',
        },
        {
          field: 'linePrice',
          title: 'قیمت خط',
          render: (row) => <Typography>{addCommas(row.linePrice)} ریال</Typography>,
        },
        {
          field: 'submitDate',
          title: 'تاریخ ثبت',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'updateDate',
          title: 'تاریخ بروز رسانی',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'notes',
          title: 'یادداشت',
        },

        {
          field: 'status',
          title: 'وضعیت',
          render: (row) => {
            const getStatus = () => {
              switch (row.status) {
                case 'منقضی شده':
                  return {
                    color: 'error',
                    title: 'منقضی شده',
                  };
                case 'فعال':
                  return {
                    color: 'success',
                    title: 'فعال',
                  };
                case 'منتقل شده':
                  return {
                    color: 'error.light',
                    title: 'منتقل شده',
                  };
                default:
                  return {
                    color: '',
                    title: 'نا مشخص',
                  };
              }
            };

            const status = getStatus();
            return <Typography color={status.color}>{status.title}</Typography>;
          },
        },
      ]}
      data={lines}
      actions={[
        {
          label: 'تغییر وضعیت',
          render: (_, row) => {
            return (
              <IconButton
                size="small"
                onClick={() => {
                  setActive((prevState) => {
                    const newState = { ...prevState, [row.__id]: !prevState[row.__id] };
                    setActive(newState);
                  });
                }}
              >
                {isSwitchActive(row.__id) ? <ActiveIcon /> : <DeactiveIcon />}
              </IconButton>
            );
          },
        },
        {
          label: 'ویرایش',
          icon: <EditIcon />,
          onClick: () => {},
        },

        {
          label: 'حذف',
          icon: <DeleteIcon />,
          onClick: () => {},
          enableBulk: true,
        },
      ]}
    />
  );
}

export default WebserviceLinesTable;
