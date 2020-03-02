import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
//import DashBoard from './Dashboard/Dashboard'
import SignIn from './SignIn'


import DisplayAllProduct from './DisplayAllProduct';
import Dashboard from '../dashboard/Dashboard';
import Product from './Product';
export default function AdminRouter(props) {
 return(
     <Router>
         <div>
         <Route path='/SignIn' exact strict component={SignIn}  history={props.history}/>
         <Route path='/DisplayAllProduct' exact strict component={DisplayAllProduct}  history={props.history}/>
         <Route path='/Dashboard' exact strict component={Dashboard} history={props.history}/>
         <Route path='/Product' exact strict component={Product}  history={props.history}/>
  

         </div>
     </Router>
 )}