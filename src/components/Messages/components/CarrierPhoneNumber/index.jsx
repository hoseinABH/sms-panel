import { makeStyles } from '@material-ui/core/styles';

// components
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from 'components/shared/Typography';
import FormGroup from 'components/shared/FormGroup';

// assets
import RightelLogo from 'assets/images/operators/rightel.png';
import IrancellLogo from 'assets/images/operators/irancell.png';
import HamrahAvallLogo from 'assets/images/operators/hamrahaval.png';
import TaliaLogo from 'assets/images/operators/talia.png';

// icons
import WrongIcon from '@material-ui/icons/HighlightOffOutlined';
import PageIcon from '@material-ui/icons/DescriptionOutlined';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  tableHeadCell: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  image: {
    objectFit: 'contain',
    objectPosition: 'center',
    width: 32,
    height: 32,
  },
  iconWithContentWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));

/**
 * @component OperatorNumber
 */
function OperatorNumber({ numberCount }) {
  const classes = useStyles();

  return (
    <FormGroup title="آمار و مبلغ ارسال" className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeadCell} align="center">
                <img src={HamrahAvallLogo} className={classes.image} alt="hamrahaval logo" />
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="center">
                <img src={IrancellLogo} className={classes.image} alt="irancell logo" />
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="center">
                <img src={TaliaLogo} className={classes.image} alt="talia logo" />
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="center">
                <img src={RightelLogo} className={classes.image} alt="rightel logo" />
              </TableCell>
              <TableCell className={classes.tableHeadCell} align="center">
                <div className={classes.iconWithContentWrapper}>
                  <WrongIcon color="error" />
                  <Typography variant="caption" locale="en" lineHeight="15">
                    شماره <br />
                    نادرست
                  </Typography>
                </div>
              </TableCell>

              <TableCell className={classes.tableHeadCell} align="center">
                <div className={classes.iconWithContentWrapper}>
                  <PageIcon color="action" />
                  <Typography variant="caption" locale="en" lineHeight="15">
                    مجموع <br />
                    صفحات
                  </Typography>
                </div>
              </TableCell>

              <TableCell className={classes.tableHeadCell} align="center">
                <div className={classes.iconWithContentWrapper}>
                  <MoneyIcon color="action" />
                  <Typography variant="caption" locale="en" lineHeight="15">
                    مبلغ <br />
                    ارسال
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography>{numberCount?.hamrahAval || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{numberCount?.irancell || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{numberCount?.talia || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{numberCount?.rightel || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{numberCount?.wrong || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{numberCount?.pages || 0}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>10,000</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </FormGroup>
  );
}

export default OperatorNumber;
