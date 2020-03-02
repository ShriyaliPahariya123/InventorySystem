import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuItem from '@material-ui/core/MenuItem';
import MainListItems from './MainListItems';
import Avatar from '@material-ui/core/Avatar';
import {BaseUrl,getData,postData} from '../component/FetchServices'
import Menu from '@material-ui/core/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {green,blue,orange} from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FirstView from '../component/FirstView'
import DisplayFeedbackNew from '../component/DisplayFeedbackNew'
import Order from '../component/Order'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:blue[500]
    },
    secondary: {
      main:blue[200]
    },
    type:"light"
  },
  status: {
    danger: 'orange',
  },

});





const drawerWidth = 210;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
    
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    
    
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   
      
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  menuButton: {
    marginRight: 36,
    
  },
  menuButtonHidden: {
    display: 'none',
    
  },
  title: {
    flexGrow: 1,
    
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
    

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },



  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
      
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
  },
  fixedHeight: {
    height: 240,
  },
  avatar: {
    margin: 10,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [view,setView]=React.useState(<FirstView/>)
  const [anchorElAM, setAnchorElAM] = React.useState(null);
  const [getTrainerLength,setTrainerLength]=React.useState([])
  const [getProductLength,setProductLength]=React.useState([])
  const [admin,setAdmin]=React.useState([])

  const handleClick=(view)=>{
    setView(view)
  }


   const checkSession=()=>{
     if(!localStorage.getItem('ADMIN'))
     {
      props.history.replace({pathname:'/SignIn'})
     }
     else{
       let rec=JSON.parse(localStorage.getItem('ADMIN'))
       console.log(rec)
       setAdmin(rec[0])
     }
    }
  
    useEffect(()=>{
      checkSession()
      counttrainer()
      countproduct()
   },[])
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeView=(View)=>{
   
     setView(View)
   
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  


  
  function avatarMenu(){
    return(
     <div>
     <Avatar aria-controls="simple-menuAM" aria-haspopup="true" alt="user" src={`${BaseUrl}/images/1.jpg`} className={classes.avatar} onClick={handleClickAM}/>
     <Menu
           id="simple-menuAM"
           anchorEl={anchorElAM}
           keepMounted
           open={Boolean(anchorElAM)}
           onClose={handleCloseAM}
         >
           <MenuItem onClick={()=>handleClickAMMenu("LOGOUT")} >Logout</MenuItem>
         </Menu>
     </div>
   
    )
   
   
   }
   function handleClickAM(event) {

    setAnchorElAM(event.currentTarget);
     

  }
  const handleClickAMMenu=(opt)=>
  {  if(opt=='LOGOUT')
  {   localStorage.clear()
    props.history.replace({pathname:'/SignIn'})
  }
    setAnchorElAM(null); 

  } 

  function handleCloseAM() {
    setAnchorElAM(null);
  }

  const counttrainer=async()=>{
    let result=await postData('admin/notification')
    setTrainerLength(result.RESULT)
    
}
const countproduct=async()=>{
  let result=await postData('admin/message')
   setProductLength(result.RESULT)
  
}


  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" color="primary" className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          FRS Innovation Centre
          
          </Typography>


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent= {getProductLength} color="secondary">
                <MailIcon onClick={()=>handleClick(<DisplayFeedbackNew/>)}/>
              </Badge>
            </IconButton>
           
     
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={getTrainerLength} color="secondary">
                <NotificationsIcon onClick={()=>handleClick(<Order/>)}/>
              </Badge>
            </IconButton>
          </div>



          <span style={{textAlign:"right"}}>
          <b>{admin.adminName}</b><br/>
          Admin
          </span>
          {avatarMenu()}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div  className={classes.toolbarIcon}>
          <img src={`${BaseUrl}/images/FIC_ICON.png`} height='90' width='100'/>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider/>
        <List ><MainListItems changeView={changeView}/></List>
        
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
         

           
             {view}


        </Container>
        
      </main>
    </div>
    </ThemeProvider>
  );
}