import { makeStyles } from '@material-ui/core/styles';

//
import { PostListTable } from '../../../components';

// constants
import { SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING_THIRD),
    paddingBottom: theme.spacing(SPACING_THIRD),
  },
}));

/**
 * @component PostsList
 */
function PostsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PostListTable />
    </div>
  );
}

export default PostsList;
