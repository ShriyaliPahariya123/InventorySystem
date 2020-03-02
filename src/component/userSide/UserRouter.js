import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

import UserSignIn from '../userSide/UserSignIn'
import UserMainPage from '../userSide/UserMainPage'


export default function UserRouter(props) {
 return(
     <Router>
         <div>
         <Route path='/UserSignIn' exact strict component={UserSignIn}  history={props.history}/>
         <Route path='/UserMainPage' exact strict component={UserMainPage}  history={props.history}/>
       
  

         </div>
     </Router>
 )}