import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl,postData,postDataAndImage} from './FetchServices'

export default function DisplayAllProduct() {
    const [stateCol, setStateCol] = React.useState({
        columns: [
            { title: 'Product ID', field: 'productId' ,editable:'never'},
            { title: 'Product Name', field: 'productName' },
            { title: 'Brand', field: 'productBrand' },
            {title:'Purchase Date',field:'dop'},
            {title:'Quantity',field:'productQuantity'},
        ]

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
 
     

  const View=()=>{
  return(
<MaterialTable
      title="TRANSITION IN"
      columns={stateCol.columns}
      data={state.data}
    
    />
    
  )}

  return (
      <div> {View()} </div>
    
  );
}
