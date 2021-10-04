// components
import Container from '@material-ui/core/Container';

/**
 * @component TabPanel
 */
function TabPanel({ disableGutters = false, children, value, index, ...rest }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Container maxWidth="xl" disableGutters={disableGutters} key={index}>
          {children}
        </Container>
      )}
    </div>
  );
}
export default TabPanel;
