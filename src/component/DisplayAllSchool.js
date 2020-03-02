import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl,postData,postDataAndImage} from './FetchServices'

export default function DisplayAllProduct() {
    const [stateCol, setStateCol] = React.useState({
        columns: [
            { title: 'School ID', field: 'schoolId' ,editable:'never'},
            { title: 'School Name', field: 'schoolName' },
            { title: 'school Address', field: 'schoolAddress' },
            {   field: 'schoolImage',
                title: 'Icon',
                render: rowData => <img src={`${BaseUrl}/images/${rowData.schoolImage}`} style={{width: 30, borderRadius: '50%'}}/>,
                editComponent:props=>(<input type='file' onchange={(event)=>setFile(event.target.files[0])}/>)
              }]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('school/displayallschool') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 
     
  const handleEdit=async(newData)=>{
    if(getFile=='')
    { 
    let body={'schoolId':newData.schoolId,
              'schoolName':newData.schoolName,
              'schoolAddress':newData.schoolAddress,
    }
    let result=await postData('school/editData',body) 
    if(result.RESULT)
    alert('Record Updated')
    else
    alert('Fail to Update Record')
    }
  else{
      let formData=new FormData()
      formData.append('schoolId',newData.schoolId)
      formData.append('schoolImage',getFile)
      const config={headers:{'content-type':'multipart/form-data'}}
      const result=await postDataAndImage('school/editIcon',formData,config)
      if(result)
      {alert('Icon Updated')}
      else
      {alert('Fail to UpdateIcon')}
  
    }
  
    readAllRecords()
  
   }

   const handleDelete=async(oldData)=>{
    let body={'schoolId':oldData.schoolId}
    
  let result=await postData('school/deleteRecordSchool',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(
<MaterialTable
      title="ALL SCHOOLS"
      columns={stateCol.columns}
      data={state.data}
      editable={{
       
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });handleEdit(newData)
            }, 600);
          }),
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
