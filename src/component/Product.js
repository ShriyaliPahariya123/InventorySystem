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

// for date pickers
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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


function Product(props){
const classes=useStyles();
const [productName,setproductName]=React.useState('')
const[productBrand,setproductBrand]=React.useState('')
const[productCategory,setproductCategory]=React.useState('')
const[productQuantity,setproductQuantity]=React.useState('')
const[productAmount,setproductAmount]=React.useState('')
const [productImage,setproductImage]=React.useState({icon:'',file:''})
const[Message,setMessage]=React.useState('')
const[dop,setdop]=React.useState(new Date('2014-08-18T21:11:54'))

const addNewRecord=async()=>{
  let formData=new FormData()
  formData.append('productName',productName)
  formData.append('productBrand',productBrand)
  formData.append('productCategory',productCategory)
  formData.append('productQuantity',productQuantity)
  formData.append('dop',dop)
  formData.append('productAmount',productAmount)
  formData.append('productImage',productImage.file)
  const config={headers:{'content-type':'multipart/form-data'}}
  const result=await postDataAndImage('product/addnewrecord',formData,config)
  if(result)
  {
   setMessage('Record Submitted...')
  }
  else
  {setMessage("Fail to Submit Record..")}
  }

  function handleDateOfProductChange(date) {
    setdop(date);
  }


return(
  <ThemeProvider theme={theme}>
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography color="primary"> <center><h2><u>Add New Product</u></h2></center></Typography>
<Grid Container>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Product Name"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={productName}
        variant="outlined"
        fullWidth
        onChange={(event)=>setproductName(event.target.value)}
        />
    </Grid>
    
    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Brand Name"
        className={clsx(classes.TextField,classes.dense)}
        value={productBrand}
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event)=>setproductBrand(event.target.value)}
        />
    </Grid>
    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Category"
        className={clsx(classes.TextField,classes.dense)}
        value={productCategory}
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event)=>setproductCategory(event.target.value)}
        />
        </Grid>
        <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Quantity of product"
        className={clsx(classes.TextField,classes.dense)}
        value={productQuantity}
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event)=>setproductQuantity(event.target.value)}
        />
        </Grid>
        <Grid xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date Of Purchase"
          format="MM/dd/yyyy"
          value={dop}
          onChange={handleDateOfProductChange}
          fullWidth
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
        </Grid>
        <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Amount"
        className={clsx(classes.TextField,classes.dense)}
        value={productAmount}
        margin="dense"
        variant="outlined"
        fullWidth
        onChange={(event)=>setproductAmount(event.target.value)}
        />
        </Grid>
    <Grid item xs={12} sm={12}>
    <input
    accept='images/*'
    className={classes.input}
    id="contained-button-file"
    multiple
    type='file'
    
    onChange={(event)=>setproductImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
    />
    <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload Image
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </label>
    </Grid>  
    <Grid item xs={12} sm={6}>
       <Avatar alt="Image" src={productImage.icon} className={classes.bigAvatar} />
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
export default Product;