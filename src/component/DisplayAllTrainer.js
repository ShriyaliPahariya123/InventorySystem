// import all package 
import React , {useEffect} from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl, postDataAndImage,postData} from './FetchServices'




export default function DisplayAllTrainer() {
    const [stateCol, setStateCol] = React.useState({
      // giving value to table and title
        columns: [
            { title: 'Trainer ID', field: 'trainerId' ,editable:'never'},
            { title: 'Trainer Name', field: 'trainerName' },
            { title: 'Trainer Mobile', field: 'trainerMobile' },
            { title: 'Trainer Gender', field: 'trainerGender' },
            { title: 'Trainer Address', field: 'trainerAddress' },
            { title: 'Trainer Email', field: 'trainerEmail' },
            { title: 'Trainer DOB', field: 'trainerDob' },
            { title: 'Date Of Joining', field: 'trainerDoj' },
         
            {
                field: 'trainerImage',
                title: 'Image',
                render: rowData => <img src={`${BaseUrl}/images/${rowData.trainerImage}`} style={{width: 30, borderRadius: '50%'}}/>,
                editComponent:props=>(<input type='file' onChange={(event)=>setFile(event.target.files[0])} />)
              }]

    })  
    // declaring state
    const [state, setState] = React.useState({
      data: []});
   const [getFile,setFile]=React.useState('')     

    
      //  get all the data from backend
  const readAllRecords=async()=>{
    var list=await getData('trainer/displayalltrainer') 
    setState({data:list})
    } 

    // starts before page loads
    useEffect(()=>{
        readAllRecords()
    },[])

//  updating data in table
const handleEdit=async(newData)=>{
  if(getFile=='')
{
let body={
   'trainerId': newData.trainerId,
   'trainerName':newData.trainerName,
   'trainerMobile':newData.trainerMobile,
   'trainerGender':newData.trainerGender,
   'trainerAddress':newData.trainerAddress,
   'trainerEmail':newData.trainerEmail,
   'trainerDob':newData.trainerDob,
   'trainerDoj':newData.trainerDoj
}
let result=await postData('trainer/editDataTrainer',body)
if(result.RESULT)
{
  alert('Record Updated..')
}
else
{
  alert('Fail to update Record..')
}
}
// image updating
else{
   let formData=new FormData()
   formData.append('trainerId',newData.trainerId)
   formData.append('trainerImage',getFile)
   const config={headers:{'content-type':'multipart/form-data'}}
   const result = await postDataAndImage('trainer/editIconTrainer',formData,config)
   if(result)
   {
     alert('Image Updated..')
   }
   else
   {
     alert('Fail to Update Image..')
   }
}
readAllRecords()
}



//  deleting whole row
const handleDelete=async(oldData)=>{
  let body={'trainerId':oldData.trainerId}
  
let result=await postData('trainer/deleteRecordTrainer',body) 
if(result.RESULT)
alert('Record Deleted')
else
alert('Fail to Delete Record')
readAllRecords()

}



  const View=()=>{
    return(
  <MaterialTable
        title="TRAINER LIST"
        columns={stateCol.columns}
        data={state.data}
        editable={{
          // to add new row and fields
        
      
        //  to update data and image
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });handleEdit(newData)
              }, 600);
            }),
            // to delete whole row
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
  // to print or display 
    return (
        <div> {View()} </div>
      
    );
  }
  