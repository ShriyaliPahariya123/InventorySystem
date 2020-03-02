import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {BaseUrl,getData} from '../component/FetchServices'
import AddSchool from '../component/AddSchool'
import DisplayAllSchool from '../component/DisplayAllSchool'
import Trainer from '../component/Trainer';
import DisplayAllTrainer from '../component/DisplayAllTrainer';
import Product from '../component/Product';
import DisplayAllProduct from '../component/DisplayAllProduct';
import TransitionIn from '../component/TransitionIn';
import SchoolModule from '../component/SchoolModule';
import DisplayFeedbackNew from '../component/DisplayFeedbackNew';
import Order from '../component/Order';

export default function MainListItems(props){
const handleClick=(view)=>{
  props.changeView(view)
}


const mainListItems = (
  <div>
    <ListItem button onClick={()=>handleClick(<Trainer/>)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Add Trainer" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<DisplayAllTrainer/>)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="List Trainer" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<Product/>)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Add Product" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<DisplayAllProduct/>)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="List Product" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<TransitionIn/>)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Transition In" />
    </ListItem>


    <ListItem button onClick={()=>handleClick(<AddSchool/>)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Add School" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<DisplayAllSchool/>)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Display All School" />
    </ListItem>

   
    <ListItem button onClick={()=>handleClick(<SchoolModule/>)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Add Modules" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<DisplayFeedbackNew/>)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>


    <ListItem button onClick={()=>handleClick(<Order/>)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Order List" />
    </ListItem>
  </div>
);

return(<div>{mainListItems}</div>);
}