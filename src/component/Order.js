import React, { useEffect, useState } from "react"
import {getData,BaseUrl,postData} from './FetchServices'
// import ReactToExcel from "react-html-table-to-excel"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dashboard from "../dashboard/Dashboard";
// import axios from 'axios';
// import { CSVLink, CSVDownload } from "react-csv";
//  import excel, { readFile,XLSX } from 'xlsx';
//  import Workbook from 'react-excel-workbook';
//  import fs from 'file-saver';
//  import Excel from "@grapecity/spread-excelio";
// import { saveAs } from 'file-saver';
// import { async } from "q";



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    
  }));

export default function Order(props){
    const [getlist,setList]=React.useState([])  
    const classes = useStyles();




const download=async(file,newData)=>{
  
console.log(file)
var url=`http://localhost:3001/reports/${file}`
window.open(url)

let body={
  'userFileId': newData,
}
let result=await postData('fileUpload/editData',body)
if(result.RESULT)
{
  
}
else
{

}
}


    const readAllRecords=async()=>{
       // let body={'schoolId':props.schoolId}
    var list=await getData('fileUpload/displayall') 
    setList(list)   
    }
    const displayList=(props)=>{
     return getlist.map((item,index)=>{
     
      return(<tr><td>{item.trainerName}</td><td>{item.schoolName}</td><td>{item.currentDate}</td><td>{item.fileUpload}</td><td>
        <Button color='primary' onClick={(file)=>download(item.fileUpload,item.userFileId)}>Download</Button>
        </td></tr>)
    
     })
    
    }


    useEffect(()=>{
    readAllRecords()    
    },[])
    return(
    
    <div>
       <center>
       
       
        
    <table border='1' id="table_id" height="60%" width="60%">
    <caption>Orders Details</caption> 
    <tbody>
    
    <tr><th>Trainer Name</th><th>School Name</th><th>Date</th><th>File</th><th>Action</th></tr>    
    {displayList()}
    </tbody>   
    </table>
  
</center>

    </div>)
    
    }
    
