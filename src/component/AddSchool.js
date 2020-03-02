import React from 'react'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Avatar from '@material-ui/core/Avatar'
import {postDataAndImage} from './FetchServices'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {green,blue,orange} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:blue[500]
    },
    secondary: {
      main:orange[500]
    },
    type:"light"
  },
  status: {
    danger: 'orange',
  },

});




const useStyles=makeStyles(theme=>({
    paper:{padding:'30px',marginTop:'10px'},
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      dense: {
          marginTop: theme.spacing(2),
        },
        button: {
          margin: theme.spacing(1),
        },
        input:{
          display:'none',
          marginTop:theme.spacing(1)
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60,
        },
}));


function AddSchool(props){
const classes=useStyles();
const [schoolName,setschoolName]=React.useState('')
const[schoolAddress,setschoolAddress]=React.useState('')
const [schoolImage,setschoolImage]=React.useState({icon:'',file:''})
const[Message,setMessage]=React.useState('')

const addNewRecord=async()=>{
  let formData=new FormData()
  formData.append('schoolName',schoolName)
  formData.append('schoolAddress',schoolAddress)
  formData.append('schoolImage',schoolImage.file)
  const config={headers:{'content-type':'multipart/form-data'}}
  const result=await postDataAndImage('school/addnewrecord',formData,config)
  if(result)
  {
   setMessage('Record Submitted...')
   setschoolName('')
   setschoolAddress('')
   setschoolImage('')
  }
  else
  {setMessage("Fail to Submit Record..")}
  }




return(
  <ThemeProvider theme={theme}>
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography color="primary"> <center><h2><u>Add School</u></h2></center></Typography>
<Grid Container>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="School Name"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={schoolName}
        variant="outlined"
        fullWidth
        onChange={(event)=>setschoolName(event.target.value)}
        />
    </Grid>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="School Address"
        className={clsx(classes.TextField,classes.dense)}
        value={schoolAddress}
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event)=>setschoolAddress(event.target.value)}
        />
        </Grid>
    <Grid item xs={12} sm={12}>
    <input
    accept='images/*'
    className={classes.input}
    id="contained-button-file"
    multiple
    type='file'
    
    onChange={(event)=>setschoolImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
    />
    <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload Image
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </label>
    </Grid>  
    <Grid item xs={12} sm={6}>
       <Avatar alt="Image" src={schoolImage.icon} className={classes.bigAvatar} />
    </Grid>
    
    <Grid item xs={12}>
    <Button variant="contained" onClick={addNewRecord}  color="primary" className={classes.button} fullWidth>
        Submit
      </Button>
      </Grid>
</Grid>
</Paper>
<Typography>
      {Message}
    </Typography>
</Container>
</ThemeProvider>
)
}
export default AddSchool;