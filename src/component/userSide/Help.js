import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { fontStyle, fontSize } from '@material-ui/system';
import { Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    
    paper:{padding:'20px',marginTop:'20px'},
    paper2:{padding:'20px',marginTop:'20px',backgroundColor:'#E9F0FF'},
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

  const hStyle = { color: 'black' };

export default function Help(){
  const image=()=>{
            return(
                <div>
                    
                    <img src="http://localhost:3000/group.png"  width="100%" height="500px"/>
                </div>
            );

        }
    const classes = useStyles();
    return(
      
        <div>
          {image()}
             {/* 1 */}
             <Container><Paper className={classes.paper2}>
             <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/1.png" width="100%" />
           </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
              <br/><br/><br/>
            
                 1. Select school where you want to order things.
                
        </Grid>
       
      </Grid>
{/* 2 */}

<Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
        <br/><br/><br/>
          2. Click on the BACK button to move to the page where you can download the record sheet given by the institution.
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/2.png" width="100%" />
          </Paper>
        </Grid>
       
      </Grid>

        {/* 3*/}
        <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/3-4.png" width="100%" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <br/><br/><br/>
              3.Click on the DOWNLOAD button to download the spread sheet provided according to schools.<br/>
              ->Download and edit that spread sheet according to your need.<br/>
              4.Click on the NEXT button to move to the page where you can upload your sheet.
             
        </Grid>
       
      </Grid>
{/* 4 */}

<Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
        <br/><br/><br/>
            5. Fill all the entries and click on UPLOAD YOUR FILE and choose your file.<br/>
              6. Click on SUBMIT button to submit your file.
         
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <img src="http://localhost:3000/5-6.png" width="100%" />
          </Paper>
        </Grid>
       
      </Grid> </Paper>
      </Container>
      <br/><br/>
        </div>
    )
}