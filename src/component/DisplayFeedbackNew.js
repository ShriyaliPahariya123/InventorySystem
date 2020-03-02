import React, { useEffect, useState } from "react"
import {getData,BaseUrl,postData} from './FetchServices'
// import ReactToExcel from "react-html-table-to-excel"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    
    const read=async(newData)=>{
        let body={
          'feedbackId': newData,
        }
        let result=await postData('contact/editData',body)
        if(result.RESULT)
        {
        
        }
        else
        {
        
        }
        }


const download=async(oldData)=>{
    let body={'feedbackId':oldData}
    let result=await postData('contact/deleteRecord',body) 
    if(result.RESULT)
    alert('Record Deleted')
    else
    alert('Fail to Delete Record')
    readAllRecords()
    
}

const displayRead=async(feedbackId)=>{
  let body={'feedbackId':feedbackId}
  let result=await postData('contact/noti',body) 
  if(result.RESULT)
  {
    {read(feedbackId)}
    alert("Message Seen..")
  }
  else {
    alert("Message Already Seen")
    
  }
  readAllRecords()
 }




    const readAllRecords=async()=>{
       // let body={'schoolId':props.schoolId}
       var list=await getData('contact/displayall') 
    setList(list)   
    }
    const displayList=(props)=>{
     return getlist.map((item,index)=>{
     
      return(<tr><td>{item.trainerName}</td><td>{item.email}</td><td>{item.mobileNumber}</td><td>{item.feedback}</td><td>
        <Button color='primary' onClick={(file)=>download(item.feedbackId)}>Delete</Button>
        </td>
        <td><Button color='primary' onClick={(feedbackId)=>displayRead(item.feedbackId)}>Mark As Read</Button></td>
        </tr>)
    
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
    
    <tr><th>Trainer Name</th><th>Email Id</th><th>Mobile Number</th><th>FeedBack</th><th>Action</th><th>Read/Unread</th></tr>    
    {displayList()}
    </tbody>   
    </table>
  
</center>

    </div>)
    
    }
    
