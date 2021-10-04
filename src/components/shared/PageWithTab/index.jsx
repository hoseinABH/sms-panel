import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

// components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from 'components/shared/TabPanel';
import AnimateGroup from 'components/shared/AnimateGroup';

// constants
import { SPACING_LEAST } from 'constants/spacing';
import { DRAWER_HEADER_HEIGHT, PAGE_HEADER_HEIGHT } from 'constants/mixins';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  headerBackground: {
    top: 0,
    left: 0,
    right: 0,
    height: DRAWER_HEADER_HEIGHT,
    position: 'absolute',
    background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    pointerEvents: 'none',
    backgroundSize: 'cover',
  },
  titleContent: {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.contrastText,
    height: '82px',
    alignItems: 'center',
    display: 'flex',
    maxHeight: '82px',
    minHeight: '82px',
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  paperContent: {
    zIndex: 1,
    position: 'relative',
    flex: 1,
  },
  tabContainer: {
    position: 'relative',
    height: PAGE_HEADER_HEIGHT,
  },
  divider: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    transform: 'translateY(-50%)',
  },
  fullHeight: {
    height: '100%',
  },
}));

/**
 * @component PageWithTitle
 */
function PageWithTab({ title, icon, pages }) {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const onTabClick = (event, value) => {
    setActive(value);
  };

  const Icon = icon;
  return (
    <div className={classes.root}>
      <div className={classes.headerBackground}></div>
      <div className={classes.titleContent}>
        {icon && <Icon color="inherit" className={classes.icon} />}
        <Typography color="inherit">{title}</Typography>
      </div>
      <Paper variant="outlined" className={classes.paperContent}>
        <div className={classes.tabContainer}>
          <Divider variant="fullWidth" className={classes.divider} />
          <Tabs
            classes={{
              scrollable: classes.fullHeight,
              root: classes.fullHeight,
              flexContainer: classes.fullHeight,
            }}
            variant="scrollable"
            value={active}
            indicatorColor="primary"
            textColor="primary"
            onChange={onTabClick}
          >
            {pages.map((page, index) => {
              return (
                <Tab
                  className={classes.fullHeight}
                  disabled={page.disabled}
                  key={index}
                  label={page.title}
                />
              );
            })}
          </Tabs>
        </div>

        {pages.map((page, index) => {
          return (
            <TabPanel key={index} index={index} value={active}>
              <AnimateGroup
                enter={{
                  animation: 'transition.slideUpBigIn',
                }}
              >
                {page.content}
              </AnimateGroup>
            </TabPanel>
          );
        })}
      </Paper>
    </div>
  );
}

export default PageWithTab;
