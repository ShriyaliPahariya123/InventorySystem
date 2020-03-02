import React, { useEffect } from "react"
import {getData,BaseUrl} from '../FetchServices'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedSteppers from "./CustomizedSteppers";

const useStyles = makeStyles({
    root:{
      display:'flex',
      flexWrap:'wrap',
     justifyContent:'center'
    },
      card: {
        
      maxWidth: 345,
      margin:10
    },
    media: {
      width:'100%',
      height:'100%'
    },
  });

  
  function SchoolCards(props){
      const classes = useStyles();
      const [getList,setList]=React.useState([])
      
      
      const readAllRecords = async()=>{
          var list = await getData('school/displayallschool')
          setList(list)
      } 

      useEffect(()=>{
          readAllRecords()
          
      },[])

      const handleClick =(schoolId)=>{
          props.setViews('STEPPERS',schoolId);
      }

      const displayList=()=>{
          return getList.map((item,index)=>{
              return(
                  <Card className={classes.card}>
                      <CardActionArea onClick={()=>handleClick(item.schoolId)}>
                          <CardMedia
                          component='img'
                          className={classes.media}
                          image={`${BaseUrl}/images/${item.schoolImage}`}
                          title={item.schoolName}
                          />
                           <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {item.schoolName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {item.schoolAddress}
        </Typography>
      </CardContent>
                      </CardActionArea>


                  </Card>
              )
          })
      }

return (
    <div className={classes.root}>
        {displayList()}

    </div>
)


  }

  export default SchoolCards;