import React from 'react'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography,Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import { postDataAndImage,postData } from './FetchServices'
// for date pickers
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// using css
const useStyles = makeStyles(theme => ({
    paper:{marginTop:theme.spacing(1),display:'flex',flexDirection:'column',alignItems:'center',},
    textField:{
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(1),
    },
    dense:{
        marginTop:theme.spacing(2),
    },
    button:{
        margin:theme.spacing(1),
    },
    input:{
        display: 'none',
    },
    rightIcon:{
        marginLeft:theme.spacing(1),
    },
    bigAvatar: {
        margin: 10,
        width :60,
        height: 60,
    },

}));
// css end here
function Trainer(props){
    const classes =useStyles();

    // using state to assign the value to objects
    const [trainerName,setTrainerName]= React.useState('')
    const [trainerPassword,setTrainerPassword]= React.useState('')
    const [trainerMobile,setTrainerMobile]= React.useState('')
    const [trainerGender,setTrainerGender]= React.useState('')
    const [trainerAddress,setTrainerAddress]= React.useState('')
    const [trainerEmail,setTrainerEmail]= React.useState('')
    const [trainerDob,setTrainerDob]= React.useState(new Date('2014-08-18T21:11:54'))
    const [trainerDoj,setTrainerDoj]= React.useState(new Date('2014-08-18T21:11:54'))
    const [trainerImage,setTrainerImage]=React.useState({icon:'',file:''})
    const [message,setMessage]=React.useState('')


    // sending data from react to node 
    const addNewRecord=async()=>{
        let formData = new FormData()
        
        formData.append('trainerName',trainerName)
        formData.append('trainerPassword',trainerPassword)
        formData.append('trainerMobile',trainerMobile)
        formData.append('trainerGender',trainerGender)
        formData.append('trainerAddress',trainerAddress)
        formData.append('trainerEmail',trainerEmail)
        formData.append('trainerDob',trainerDob)
        formData.append('trainerDoj',trainerDoj)
        formData.append('trainerImage',trainerImage.file)
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('trainer/addnewrecord',formData,config)
        if(result)
        {setTrainerPassword('')
        setTrainerName('')
        setTrainerMobile('')
        setTrainerGender('')
        setTrainerAddress('')
         setTrainerEmail('')
         setTrainerDob('')
         setTrainerDoj('');
         setTrainerImage('')
         setMessage('Record Submitted...')
        }
        else
        {setMessage("Fail to Submit Record..")}
    }
// sending data from react to node ends
// sending data from react to node ends

function handleDateOfBirthChange(date) {
    setTrainerDob(date);
  }

  function handleDateOfJoiningChange(date1) {
    setTrainerDoj(date1);
  }

// frontEnd start
    return(
        <Container maxWidth='xs'>
            <Paper className={classes.paper}>
            <Typography color="primary"> <center><h2><u>Add New Product</u></h2></center></Typography>
                   <Grid Container>
                    
                    {/* trainer name  */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Trainer Name"
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             value={trainerName}
                             variant="outlined"
                             onChange={(event)=>setTrainerName(event.target.value)}
                             fullWidth
                           />
                       </Grid>
                       
                       {/* trainer password */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Password"
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             type="password"
                             autoComplete="current-password"
                             value={trainerPassword}
                             variant="outlined" 
                             onChange={(event)=>setTrainerPassword(event.target.value)}
                             fullWidth

                           />
                       </Grid>
                        
                        {/* trainer mobile */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Contact No."
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             value={trainerMobile}
                             variant="outlined"
                             onChange={(event)=>setTrainerMobile(event.target.value)}
                             fullWidth
                           />
                       </Grid>

                         {/* trainer gender */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Gender"
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             value={trainerGender}
                             variant="outlined"
                             onChange={(event)=>setTrainerGender(event.target.value)}
                             fullWidth
                           />
                       </Grid>


                     {/* trainer email */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Email"
                             type="email"
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             value={trainerEmail}
                             variant="outlined"
                             onChange={(event)=>setTrainerEmail(event.target.value)}
                             fullWidth
                           />
                       </Grid>
 
                   {/* trainer address */}
                       <Grid item xs={12}>
                           <TextField
                             id="outlined-dense"
                             label="Address"
                             className={clsx(classes.textField,classes.dense)}
                             margin="dense"
                             value={trainerAddress}
                             variant="outlined"
                             onChange={(event)=>setTrainerAddress(event.target.value)}
                             fullWidth
                           />
                       </Grid>

                       <Grid item xs={12}>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date Of Birth"
          format="MM/dd/yyyy"
          value={trainerDob}
          fullWidth
          onChange={handleDateOfBirthChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
                       </Grid>

                       {/* date of joining */}
                       <Grid item xs={12}>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date Of Joining"
          format="MM/dd/yyyy"
          value={trainerDoj}
          fullWidth
          onChange={handleDateOfJoiningChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
                       </Grid>
                       </MuiPickersUtilsProvider>
</Grid>


                    {/* input image */}
                       <Grid item xs={12} sm={6}>
                           <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={(event)=>setTrainerImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
                           />
                           <label htmlFor="contained-button-file">
                             <Button variant="contained" component="span" className={classes.button}>
                                 Upload
                                 <CloudUploadIcon className={classes.rightIcon}/>
                             </Button>
                           </label>
                  </Grid>
                             {/* display input image */}
                  <Grid item xs={12} sm={6}>
                      <Avatar alt='Image' src={trainerImage.icon} className={classes.bigAvatar}/>
                  </Grid>
                                   {/* submit button */}
                       <Grid item xs={12}>
                           <Button variant="contained" onClick= {addNewRecord} color="primary" className={classes.button} fullWidth>
                               Submit</Button>
                       </Grid>
                   </Grid>
            </Paper>
            {/* message after submit */}
            <Typography>
                {message}
            </Typography>
        </Container>
    )
}
// frontEnd End
export default Trainer;