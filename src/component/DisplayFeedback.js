import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl,postData} from './FetchServices'

export default function DisplayFeedback(props) {
    const [stateCol, setStateCol] = React.useState({
        columns: [
          { title: 'ID', field: 'feedbackId' ,editable:'never'},
            { title: 'Trainer Name', field: 'trainerName' ,editable:'never'},
            { title: 'Email', field: 'email',editable:'never' },
            { title: 'Mobile No.', field: 'mobileNumber',editable:'never' },
            {title:'FeedBack',field:'feedback',editable:'never'},
            
          ]

    })  
  const [state, setState] = React.useState({
     data: []});
  
   
  const readAllRecords=async()=>{
    var list=await getData('contact/displayall') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 
     
//   const handleEdit=async(newData)=>{
    
    
//     let body={'moduleId':newData.moduleId,
//               'schoolId':newData.schoolId,
//               'productId':newData.productId,
//               'moduleLimit':newData.moduleLimit,
//               'moduleNeeded':newData.moduleNeeded,
              
//     }
//     let result=await postData('schoolModule/editData',body) 
//     if(result.RESULT)
//     alert('Record Updated')
//     else
//     alert('Fail to Update Record')
//     readAllRecords()
  
//    }

   const handleDelete=async(oldData)=>{
    let body={'feedbackId':oldData.feedbackId}
    
  let result=await postData('contact/deleteRecord',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(
<MaterialTable
      title="Editable Example"
      columns={stateCol.columns}
      data={state.data}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       const data = [...state.data];
        //       data.push(newData);
        //       setState({ ...state, data });
        //     }, 600);
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       const data = [...state.data];
        //       data[data.indexOf(oldData)] = newData;
        //       setState({ ...state, data });handleEdit(newData)
        //     }, 600);
        //   }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });handleDelete(oldData)
            }, 600);
          }),
      }}
    />
    
  )}

  return (
      <div> {View()} </div>
    
  );
}
