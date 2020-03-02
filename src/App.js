import React from 'react';
//import SignIn from './component/SignIn'
import DisplayAllProduct from './component/DisplayAllProduct'
import Product from './component/Product'
import AdminRouter from './component/AdminRouter'
import TransitionIn from './component/TransitionIn'
import AddSchool from './component/AddSchool'
import DisplayAllSchool from './component/DisplayAllSchool'
import UserSignIn from './component/userSide/UserSignIn'
import UserRouter from './component/userSide/UserRouter'
import Graph from './component/Graph'
import ChartsPage from './component/ChartsPage'
import FirstView from './component/FirstView'


function App() {
  return (
    <div>
    <UserRouter/>
     <AdminRouter/>
         </div>
  );
}

export default App;
