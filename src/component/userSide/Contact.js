import React, { useEffect } from "react"
import clsx from 'clsx';
import { Container, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 

import Button from '@material-ui/core/Button'
import {postDataAndImage,getData,postData} from '../FetchServices';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    
    paper:{padding:'20px',marginTop:'20px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170,
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    group: {
        margin: theme.spacing(1, 0),
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      input: {
        display: 'none',
      },
  })); 
       
  
  const image=()=>{
            return(
                <div>
                    
                    <img src="http://localhost:3000/contacts.jpg"  width="100%" height="400px"/>
                </div>
            );

        }

function Contact(){
    const classes = useStyles();
    const [trainerName,settrainerName]=React.useState('');
    const [email,setemail]=React.useState('');
    const [mobileNumber,setmobileNumber]=React.useState('');
    const [feedback,setfeedback]=React.useState('');
    const [message,setMessage]=React.useState('');
   
    
   

    const addnewrecord=async()=>{
        // use body for sending data to node
         
    const body={
      
    'trainerName':trainerName,
    'email':email,
    'mobileNumber':mobileNumber,
    'feedback':feedback,
    
}
const result=await postData('contact/addnewrecord',body) 
if(result)
{
    settrainerName('')
    setemail('')
    setmobileNumber('')
    setfeedback('')
  setMessage('Record Submitted.....')
}
else{
  setMessage('Not Submitted..........')
}

    }


return (
    <div >
        
{image()}
<br/>
<br/>

<Container>
<Grid container spacing={3}>
<Grid item xs>
             <Paper className={classes.paper}>
               <Typography><center><h4>Contact Us</h4></center></Typography>
                 <Grid container spacing={1}>

                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Name"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={trainerName}
                      variant="outlined"
                     onChange={(event)=>settrainerName(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                      {/* entering the email */}
                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Email"
                      type="email"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={email}
                      variant="outlined"
                     onChange={(event)=>setemail(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Mobile No."
                      
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={mobileNumber}
                      variant="outlined"
                     onChange={(event)=>setmobileNumber(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                      <Grid item xs={12}>
                      <TextField
                      id="outlined-multiline-flexible"
                      label="Write Here.."
                      multiline
                      rowsMax="4"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={feedback}
                      variant="outlined"
                     onChange={(event)=>setfeedback(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                      <Grid item xs={12}>
                      <Button variant="contained" color="primary" onClick={addnewrecord} className={classes.button} fullWidth>
                      Submit
                      </Button>
                     </Grid>
                     <Typography>
                      {message}
                     </Typography>


                     </Grid>


                      </Paper>
                      </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <br/>
          <img src="http://localhost:3000/Fire.png"  /><br/><br/>
          </Paper>
        </Grid>
        <Grid item xs>
        
         <Paper className={classes.paper}>
            <h3>Find Us.</h3><br/>
            Feel free to contact us through any medium!<br/><br/>
            <LocationOnIcon/>Top Floor Reynold's Block, ITM GOI, Gwalior, M.P. 474001.
            <br/><br/>
            <PhoneIcon/> +91-8305990550<br/><br/>
            <MailIcon/>contact@fizrobotics.com<br/><br/>
            <MailIcon/> business@fizrobotics.com<br/><br/>
            <br/><br/>
            </Paper>
            </Grid>
            </Grid>
            </Container>
            
            
        
        
     
    </div>
)

}

export default Contact;