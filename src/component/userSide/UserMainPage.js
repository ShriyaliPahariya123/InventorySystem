import React,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { id } from 'date-fns/esm/locale';
import SchoolCards from './SchoolCards';
import Contact from './Contact'
import Avatar from '@material-ui/core/Avatar';
import {BaseUrl} from '../FetchServices'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserDocFile from './UserDocFile';
import CustomizedSteppers from './CustomizedSteppers';
import Help from './Help';
import Dashboard from '../../dashboard/Dashboard';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(30),
   
  },
  title2: {
    flexGrow: 1,
   
  },
  avatar: {
    margin: 10,
    width:30,
    height:30
  },
}));

export default function UserMainPage(props) {
 
  const classes = useStyles();
  const [anchorElAM, setAnchorElAM] =React.useState(null);
  const [trainer,setTrainer]=React.useState([])



  const checkSession=()=>{
    if(!localStorage.getItem('TRAINER'))
    {
     
    }
    else{
      let rec=JSON.parse(localStorage.getItem('TRAINER'))
      console.log(rec)
      setTrainer(rec[0])
    }
   }
  
   useEffect(()=>{
    checkSession()
 },[])


  const setViews=(views,id)=>{
    // set views within same user page..
    if(views=='UserDocFile')
        {
          setView(<UserDocFile schoolId={id} setViews={setViews} />)

        }  
      else if(views=='STEPPERS'){
        setView(<CustomizedSteppers schoolId={id} setViews={setViews} />)
      }
  }
 

const [view,setView] =React.useState(<SchoolCards setViews={setViews}/>)



function handleClickAM(event) {

  setAnchorElAM(event.currentTarget);
   

}

// const setHome =()=>{
//   setView=(<SchoolCards setViews={setViews}/>)
// }

const handleClickAMMenu=(opt)=>
{  if(opt=='LOGOUT')
{
  //setView(<UserLogin setViews={setViews} emailid={''} />)
}
  setAnchorElAM(null); 

} 

function handleCloseAM() {
  setAnchorElAM(null);
}


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.title2}>
          {/* <img src="http://localhost:3000/FIC_Icon.ico" width="25px"/> */}
          <img src="http://localhost:3000/logo.png" height='50%' width='70%'/>
          </Typography>
         
          <Typography variant="h6" className={classes.title} align="right">
          <Button color="inherit" float="centre" onClick={()=>setView(<SchoolCards setViews={setViews}/>)}>Home</Button>
          </Typography>
          <Typography variant="h6" className={classes.title} align="center">
          <Button color="inherit" onClick={()=>setView(<Contact setViews={setViews}/>)}>Contact Us</Button>
          </Typography>
          <Typography variant="h6" className={classes.title} align="left">
          <Button color="inherit" onClick={()=>setView(<Help setViews={setViews}/>)}>Help</Button>
          </Typography>
          
          {trainer.trainerName}
         
          
          <Avatar aria-controls="simple-menuAM" aria-haspopup="true" alt="trainer" src="http://localhost:3000/user.jpg" className={classes.avatar} onClick={handleClickAM}/>
  <Menu
        id="simple-menuAM"
        anchorEl={anchorElAM}
        keepMounted
        open={Boolean(anchorElAM)}
        onClose={handleCloseAM}
      >
        
        <MenuItem onClick={()=>handleClickAMMenu("LOGOUT")} >Logout</MenuItem>
      </Menu>

        </Toolbar>
      </AppBar>
      {/* after the upper Bar */}

      
       {view}
       


    </div>
  );
}