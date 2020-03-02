import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl,postData,postDataAndImage} from './FetchServices'

export default function DisplayAllProduct() {
    const [stateCol, setStateCol] = React.useState({
        columns: [
            { title: 'Product ID', field: 'productId' ,editable:'never'},
            { title: 'Product Name', field: 'productName' },
            { title: 'Brand', field: 'productBrand' },
            {title:'Category',field:'productCategory'},
            {title:'Quantity',field:'productQuantity'},
            {title:'Purchase Date',field:'dop'},
            {title:'Total Amount',field:'productAmount'},
            {   field: 'productImage',
                title: 'Icon',
                render: rowData => <img src={`${BaseUrl}/images/${rowData.productImage}`} style={{width: 30, borderRadius: '50%'}}/>,
                editComponent:props=>(<input type='file' onchange={(event)=>setFile(event.target.files[0])}/>)
              }]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('product/displayall') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 
     
  const handleEdit=async(newData)=>{
    if(getFile=='')
    { 
    let body={'productId':newData.productId,
              'productName':newData.productName,
              'productBrand':newData.productBrand,
              'productCategory':newData.productCategory,
              'productQuantity':newData.productQuantity,
              'dop':newData.dop,
              'productAmount':newData.productAmount,
    }
    let result=await postData('product/editData',body) 
    if(result.RESULT)
    alert('Record Updated')
    else
    alert('Fail to Update Record')
    }
  else{
      let formData=new FormData()
      formData.append('productId',newData.productId)
      formData.append('productImage',getFile)
      const config={headers:{'content-type':'multipart/form-data'}}
      const result=await postDataAndImage('product/editIcon',formData,config)
      if(result)
      {alert('Icon Updated')}
      else
      {alert('Fail to UpdateIcon')}
  
    }
  
    readAllRecords()
  
   }

   const handleDelete=async(oldData)=>{
    let body={'productId':oldData.productId}
    
  let result=await postData('product/deleteRecord',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(
<MaterialTable
      title="ALL PRODUCTS"
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
