import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// components
import { ChageTarifModal, DefaultTarifsTable } from '../../../components';
import LoadingButton from 'components/shared/LoadingButton';

// constants
import { SPACING, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },

  actions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(SPACING),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  createTarifButton: {
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  quickChangeButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: theme.spacing(SPACING_HALF),
    },
  },
}));

/**
 * @component DefaultTarifs
 */
function DefaultTarifs() {
  const classes = useStyles();

  const [changeTarifModal, setChangeTarifModal] = useState(false);
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <LoadingButton
          onClick={() => setChangeTarifModal(true)}
          className={classes.quickChangeButton}
          size="small"
          variant="contained"
          color="primary"
        >
          تغییرات سریع
        </LoadingButton>
        <LoadingButton
          className={classes.createTarifButton}
          size="small"
          variant="contained"
          color="success"
          onClick={() => history.push('/packages-tarifs/create-tarif')}
        >
          ایجاد تعرفه جدید
        </LoadingButton>
      </div>

      <DefaultTarifsTable />

      <ChageTarifModal open={changeTarifModal} onClose={() => setChangeTarifModal(false)} />
    </div>
  );
}

export default DefaultTarifs;
