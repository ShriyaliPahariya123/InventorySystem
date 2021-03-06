import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {postData} from '../FetchServices'
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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

export default function UserSignIn(props) {
  const classes = useStyles();
  const [trainerId,settrainerId]=React.useState('')
  const [trainerPassword,settrainerPassword]=React.useState('')
   
  const checkLogin=async()=>{
  let body={'trainerId':trainerId,
                 'trainerPassword':trainerPassword}
   let result=await postData('user/checkuserlogin',body)
   
   if(result.RESULT)
   {  
   localStorage.setItem('TRAINER',JSON.stringify(result.RESULT))

   props.history.replace({pathname:'/UserMainPage'})

   }
   else
   {
     alert('Invalid UID/Password')
   }


  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={trainerId}
            label="trainerId"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event)=>settrainerId(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={trainerPassword}
            onChange={(event)=>settrainerPassword(event.target.value)}

            name="trainerPassword"
            label="Password"
            type="password"
            id="trainerPassword"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
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
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
         
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}