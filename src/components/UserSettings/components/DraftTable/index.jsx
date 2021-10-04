// components
import Table from 'components/shared/Table';
import Spinner from 'components/shared/Spinner';
import Typography from 'components/shared/Typography';
import Box from '@material-ui/core/Box';
// icons
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/CreateOutlined';

// hooks
import { useAllDrafts } from 'hooks/drafts';

/**
 * @component DraftTable
 */
function DraftTable() {
  const { data, isLoading } = useAllDrafts();

  if (isLoading) return <Spinner />;
  return (
    <Table
      disableFilter
      columns={[
        {
          field: 'body',
          title: 'متن',
          render: (row) => (
            <Box maxWidth={500}>
              <Typography noWrap>{row.body}</Typography>
            </Box>
          ),
        },
      ]}
      data={data?.data?.docs}
      actions={[
        {
          label: 'ویرایش',
          icon: <UpdateIcon />,
          onClick: () => {},
        },
        {
          label: 'حذف',
          icon: <DeleteIcon />,
          enableBulk: true,
          onClick: () => {},
        },
      ]}
    />
  );
}

export default DraftTable;
