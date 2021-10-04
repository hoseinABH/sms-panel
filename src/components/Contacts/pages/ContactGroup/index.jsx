import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { ContactGroupTable, AddContactModal } from '../../components';

import PageWithTitle from 'components/shared/PageWithTitle';
import FormGroup from 'components/shared/FormGroup';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import Grid from '@material-ui/core/Grid';

// icons
import ContactIcon from '@material-ui/icons/ContactPhoneOutlined';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST, SPACING_THIRD } from 'constants/spacing';

// hooks
import { useCreateGroup, useGroup, useUpdateGroup } from 'hooks/groups';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  addContact: {
    marginRight: theme.spacing(SPACING_HALF),
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(SPACING_HALF),
      marginTop: theme.spacing(SPACING_HALF),
      marginRight: 0,
      marginLeft: 0,
      width: '100%',
    },
  },
  input: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(SPACING_HALF),
    },
  },
  actions: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  headerForm: {
    marginBottom: theme.spacing(SPACING_HALF),
    paddingLeft: theme.spacing(SPACING_HALF),
    paddingRigth: theme.spacing(SPACING_THIRD),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRigth: 0,
    },
  },

  createGroup: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
  spacing: {
    marginBottom: theme.spacing(SPACING_HALF),
    marginTop: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component ContactGroup
 */
function ContactGroup() {
  const classes = useStyles();
  const history = useHistory();
  const { id: gpId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { data } = useGroup(gpId);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const toggleModal = () => {
    setOpenModal(true);
  };

  const { mutate: create, isLoading: createLoading } = useCreateGroup();
  const { mutate: update, isLoading: updateLoading } = useUpdateGroup();

  const createGroupHandler = () => {
    const newGroup = {
      name,
      description,
    };
    if (name.trim() !== '' && description.trim() !== '') {
      create(newGroup);
      setName('');
      setDescription('');
    } else {
      enqueueSnackbar('همه فیلد هارا پر کنید', { variant: 'warning' });
    }
  };

  const updateGroupHandler = () => {
    const newGroup = {
      id: gpId,
      name,
      description,
    };
    if (name.trim() !== '' && description.trim() !== '') {
      update(newGroup);
      setName('');
      setDescription('');
      history.push('/contacts/groups');
    } else {
      enqueueSnackbar('همه فیلد هارا پر کنید', { variant: 'warning' });
    }
  };

  useEffect(() => {
    if (data?.data) {
      setName(data.data.name);
      setDescription(data.data.description);
      console.log(data);
    }
  }, [data]);

  return (
    <PageWithTitle title="مخاطبین" contentTitle="گروه مخاطبین" icon={ContactIcon}>
      <Grid
        container
        spacing={SPACING_HALF}
        className={classes.headerForm}
        alignItems="center"
        justify="space-between"
      >
        <Grid item md={4} xs={12}>
          <Input
            fullWidth
            className={classes.input}
            name="search"
            type="search"
            label="جستجو"
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <div className={classes.actions}>
            <LoadingButton
              className={classes.contactsButton}
              onClick={() => history.push('/contacts')}
              variant="contained"
              color="warning.dark"
            >
              لیست مخاطبین
            </LoadingButton>
            <LoadingButton
              onClick={toggleModal}
              className={classes.addContact}
              variant="contained"
              color="success"
            >
              افزودن مخاطب
            </LoadingButton>
            <LoadingButton
              className={classes.searchButton}
              variant="contained"
              color="primary"
            >
              جستجو
            </LoadingButton>
          </div>
        </Grid>
      </Grid>
      <div className={classes.spacing}>
        <FormGroup title="درج گروه">
          <Grid
            container
            spacing={SPACING_LEAST}
            alignItems="center"
            justify="space-between"
            className={classes.createGroup}
          >
            <Grid item xs={12} md={4}>
              <Input
                fullWidth
                name="groupName"
                onChange={(value) => setName(value)}
                value={name}
                label="نام گروه"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Input
                fullWidth
                name="description"
                onChange={(value) => setDescription(value)}
                value={description}
                label="توضیحات"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              {data ? (
                <LoadingButton
                  className={classes.addContact}
                  variant="contained"
                  color="success"
                  onClick={updateGroupHandler}
                  loading={updateLoading}
                  disabled={updateLoading}
                >
                  ویرایش گروه
                </LoadingButton>
              ) : (
                <LoadingButton
                  className={classes.addContact}
                  variant="contained"
                  color="success"
                  onClick={createGroupHandler}
                  loading={createLoading}
                  disabled={createLoading}
                >
                  ثبت گروه
                </LoadingButton>
              )}
            </Grid>
          </Grid>
        </FormGroup>
      </div>

      {/* Start ContactGroup Table */}
      <ContactGroupTable />
      {/* End ContactGroup Table */}

      {/* Start add create contact Modal */}
      <AddContactModal open={openModal} onClose={() => setOpenModal(false)} />
      {/* End add create contact Modal */}
    </PageWithTitle>
  );
}

export default ContactGroup;
