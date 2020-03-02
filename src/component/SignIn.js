import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {postData} from './FetchServices'
import {BaseUrl} from '../component/FetchServices'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'FIC Robotics-We support Gathering of Art'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BaseUrl}/images/background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
 
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
   const classes = useStyles();
   const[adminId,setadminId]=React.useState('')
   const[adminPassword,setadminPassword]=React.useState('')

  
   
   const checkLogin=async()=>{
           let body={'adminId':adminId,'adminPassword':adminPassword}
           let result=await postData('admin/checkadminlogin',body)
   

           //alert(result.RESULT)
  if(result.RESULT)
   {  
     localStorage.setItem('ADMIN',JSON.stringify(result.RESULT))

     props.history.replace({pathname:'/Dashboard'})
 

   }
   else
   {
     alert('Invalid UID/Password')
   }
   }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="adminId"
              label="Admin ID"
              name="adminId"
              value={adminId}
              autoComplete="#"
              autoFocus
              onChange={(event)=>setadminId(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="adminPassword"
              label="Password"
              type="password"
              id="adminPassword"
              value={adminPassword}
              autoComplete="current-password"
              onChange={(event)=>setadminPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={checkLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <MadeWithLove />
            </Box>
          </form>
        </paper>
      </Grid>
    </Grid>
  );
}