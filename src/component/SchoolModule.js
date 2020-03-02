import React,{useEffect} from 'react';
import clsx from 'clsx';
import { Container, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button'
import {postDataAndImage,getData,postData} from './FetchServices';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'; 
import Select from '@material-ui/core/Select';
 
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { async } from 'q';

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
      const [schoolId,setschoolId]=React.useState('');
      const [productId,setproductId]=React.useState('');
      
      const [moduleLimit,setmoduleLimit]= React.useState('');
      const [moduleNeeded,setmoduleNeeded]=React.useState('');
      const [message,setMessage]=React.useState('');
      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      const [getSList,setSList]=React.useState([]);
      const [getPList,setPList]=React.useState([]);


     const readSchoolList=async()=>{
          var list= await getData('school/displayallschool')
          setSList(list)
          
        
      }

     

     const readProductList=async()=>{
          var list1= await getData('product/displayall')
          setPList(list1)
          
      }

     useEffect(()=>{
         readSchoolList()
         readProductList()
         setLabelWidth(inputLabel.current.offsetWidth);
     },[]);

     const schoolList=()=>{
         return getSList.map((item,index)=>{
             return(<MenuItem value={item.schoolId}>{item.schoolName}</MenuItem>)
         })
     }

     const productList=()=>{
        return getPList.map((item,index)=>{
            return(<MenuItem value={item.productId}>{item.productName}</MenuItem>)
        })
    }

    const addnewrecord=async()=>{
        // use body for sending data to node
         
    const body={
      
    'schoolId':schoolId,
    'productId':productId,
    'moduleLimit':moduleLimit,
    'moduleNeeded':moduleNeeded,
    
}
const result=await postData('schoolModule/addnewrecord',body) 
if(result)
{
  setschoolId('')
  setproductId('')
  setmoduleLimit('')
  setmoduleNeeded('')
  setMessage('Record Submitted.....')
}
else{
  setMessage('Not Submitted..........')
}

    }

    const onSchoolChange=(event)=>{
        setschoolId(event.target.value)
    }

    const onProductChange=(event)=>{
        setproductId(event.target.value)
    }


     return (
         <Container maxWidth='xs'>
             <Paper className={classes.paper}>
               <Typography><center><h4>Choose Products</h4></center></Typography>
                 <Grid container spacing={1}>

                   {/* school dropdown */}
                     <Grid item xs={12}>
                     <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                       Schools
                      </InputLabel>
                         <Select
                          value={schoolId}
                          onChange={(event)=>onSchoolChange(event)}
                           input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                           >
                         {schoolList()}
                          </Select>
                     </FormControl> 

                     </Grid>


                       {/* product dropdown */}
                     <Grid item xs={12}>
                     <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                       Products
                      </InputLabel>
                         <Select
                          value={productId}
                          onChange={(event)=>onProductChange(event)}
                           input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                           >
                         {productList()}
                          </Select>
                     </FormControl> 

                     </Grid>

                     {/* entering the limit */}
                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Limit"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={moduleLimit}
                      variant="outlined"
                     onChange={(event)=>setmoduleLimit(event.target.value)}
                     fullWidth
                      /> 
                      </Grid>

                      {/* entering the need */}
                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Need"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={moduleNeeded}
                      variant="outlined"
                     onChange={(event)=>setmoduleNeeded(event.target.value)}
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

         </Container>
     )

     //end

  }
   export default SchoolModule;