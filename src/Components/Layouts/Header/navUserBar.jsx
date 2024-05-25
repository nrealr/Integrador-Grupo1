import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core/Button';
import AdminPanelSettingsIcon from '@material-ui/icons/AdminPanelSettings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    margin: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

const ROUTES = {
  ADDUSER: '/adduser',
  PROFILE: '/profile'
};

export const NavUserBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to={ROUTES.ADDUSER}>
        <Button variant="contained" color="secondary" className={classes.button}>
          Create Account
        </Button>
      </Link>

      <Link to={ROUTES.PROFILE}>
        <Button variant="contained" color="secondary" className={classes.button}>
          Log in
        </Button>
      </Link>

      <AdminPanelSettingsIcon className={classes.icon} />
    </div>
  );
};