import React,{useEffect} from 'react'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography,Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import { postDataAndImage,postData } from './FetchServices'
// using css
const useStyles = makeStyles(theme => ({
    paper:{marginTop:theme.spacing(1),display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#1976D2'},
    paper1:{marginTop:theme.spacing(1),display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#E91E63'},

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
    const [getTrainerLength,setTrainerLength]=React.useState([])
    const [getProductLength,setProductLength]=React.useState([])

    // sending data from react to node 
    
// sending data from react to node ends
const counttrainer=async()=>{
    let result=await postData('admin/counttrainer')
    setTrainerLength(result.RESULT)
    
}
const countproduct=async()=>{
    let result=await postData('admin/countproduct')
     setProductLength(result.RESULT)
    
}

useEffect(()=>{
    counttrainer()
 countproduct()
    
},[])

// frontEnd start
    return(
        <Container maxWidth='xs'>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            {getTrainerLength}<br/>
            Annual Trainer <br/>

            </Paper> </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper1}>
            {getProductLength}
            <br/>
            Annual Trainer <br/>
            </Paper></Grid>
            </Grid>
        </Container>
    )
}
// frontEnd End
export default Trainer;