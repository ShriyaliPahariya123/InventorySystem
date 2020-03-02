import React, { useEffect, useState } from "react"
import {getData,BaseUrl,postData} from '../FetchServices'
import ReactToExcel from "react-html-table-to-excel"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    download: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  }));

export default function UserDocFile(props){
    const [getlist,setList]=React.useState([])  
    const classes = useStyles(); 

    
    const readAllRecords=async()=>{
        let body={'schoolId':props.schoolId}
    var list=await postData('schoolModule/displayBySchoolId',body) 
    setList(list)   
    }
    const displayList=()=>{
     return getlist.map((item,index)=>{
    
      return(<tr><td>{item.schoolName}</td><td>{item.productName}</td><td>{item.moduleLimit}</td><td>{item.moduleNeeded}</td></tr>)
    
     })
    
    }


    useEffect(()=>{
    readAllRecords()    
    },[])
    return(
    
    <div>
       <center>
        <ReactToExcel
        className={classes.download}
table="table_id"
filename="orderlist"
sheet="sheet 1"
buttonText="Download Your File"
/>
       
        
    <table border='1' id="table_id" height="60%" width="60%">
    <caption>List of Products</caption> 
    <tbody>
    
    <tr><th>School Id</th><th>Product Id</th><th>Limit</th><th>Needed</th></tr>    
    {displayList()}
    </tbody>   
    </table>
  
</center>

    </div>)
    
    }
    
