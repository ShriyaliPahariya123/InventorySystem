import React, { useEffect, useState } from "react"
import { fade,makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TrainerChartsPage from '../component/TrainerChartsPage'
import ChartsPage from '../component/ChartsPage'
const useStyles = makeStyles(theme => ({
  paper:{padding:'5px',marginTop:'5px'},
  paper2:{padding:'10px',marginTop:'20px',backgroundColor:'#E9F0FF'},
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    
  }));

export default function FirstView(props){
    // const [getlist,setList]=React.useState([])  
    const classes = useStyles();
    


    return(
    <div>
      
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper2}>
          <Typography><center>Number Of Trainer</center> </Typography>
        <Paper className={classes.paper}>
         <TrainerChartsPage/>
         </Paper>
         </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper2}>
        <Typography><center>Number Of Products</center> </Typography>
        <Paper className={classes.paper}>
       <ChartsPage/>
       </Paper>
       </Paper>
        </Grid>
       
      </Grid>
    </div>
    )
    
    }
    
