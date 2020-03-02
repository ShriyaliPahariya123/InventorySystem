import React,{useEffect} from 'react';
import clsx from 'clsx';
import { Container, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button'
import {postDataAndImage,getData,postData} from '../FetchServices';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel'; 
// import Select from '@material-ui/core/Select';
 
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import { async } from 'q';

// for date pickers
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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


  function SchoolModule(props){
      const classes = useStyles();
      const [schoolName,setschoolName]=React.useState('');
      const [trainerName,settrainerName]=React.useState('');
      
      const [currentDate,setcurrentDate]= React.useState(new Date('2019-08-18T21:11:54'));
      const [fileUpload,setfileUpload]=React.useState({icon:'',file:''});
      const [message,setMessage]=React.useState('');
     
      
      
 

    //  useEffect(()=>{
       
    //       setLabelWidth(inputLabel.current.offsetWidth);
    //  },[]);

    
    const addnewrecord=async()=>{
        // use body for sending data to node
         
   
let formData= new FormData()
    formData.append('trainerName',trainerName)
    formData.append('schoolName',schoolName)
    formData.append('currentDate',currentDate)
    formData.append('fileUpload',fileUpload.file)
    const config={headers:{'content-type':'multipart/form-data'}}
    const result =await postDataAndImage('fileUpload/addnewrecord',formData,config)
    if(result)
{
  setschoolName('')
  settrainerName('')
  setcurrentDate('')
  setfileUpload('')
  setMessage(<font color='green'>'Record Submitted.....'</font>)
}
else{
  setMessage('Not Submitted..........')
}

    }

    function handleCurrentDate(date) {
      setcurrentDate(date);
    }



     return (
         <Container maxWidth='xs'>
             <Paper className={classes.paper}>
               <Typography><center><h4>Upload Your File</h4></center></Typography>
                 <Grid container spacing={1}>

                   <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Enter Trainer Name"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={trainerName}
                      variant="outlined"
                     onChange={(event)=>settrainerName(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>


                      
                       <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Enter School Name"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={schoolName}
                      variant="outlined"
                     onChange={(event)=>setschoolName(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                    
                      <Grid item xs={12}>
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Current Date"
          format="mm/dd/yyyy"
          value={currentDate}
          fullWidth
          onChange={handleCurrentDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
                       </Grid>

                      {/* file upload here */}

                      
                      <Grid item xs={12}>
                           <input
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            className={classes.input}
                            id="sub-contained-button-files"
                            multiple
                            type="file"
                            onChange={(event)=>setfileUpload({file:event.target.files[0]})}
                           />
                           <label htmlFor="sub-contained-button-files">
                             <Button variant="contained" component="span" className={classes.button}>
                                 Upload Your File
                                 <CloudUploadIcon className={classes.rightIcon}/>
                             </Button>
                           </label>
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

         </Container>
     )

     //end

  }
   export default SchoolModule;