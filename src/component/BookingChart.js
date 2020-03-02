import React from 'react';
import { Line as BarChart } from 'react-chartjs';

const BOOKINGS_BUCKETS = {
  'Monday':'Mon',
  'Tuesday':'Tue',
  'Wednesday':'Wed',
  'Thursday':'Thu',
  'Friday':'Fri',
  'Saturday':'Sat',
  'Sunday':'Sun'
};

const BookingGraph = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for(const bucket in BOOKINGS_BUCKETS){
    const filteredTempCount=props.feeds.reduce((prev,current)=>{
      if(current.dop.substring(0, 3)===BOOKINGS_BUCKETS[bucket]){
        return prev+1;
      }  else{
        return prev;
      }
    },0);
    values.push(filteredTempCount);
    chartData.labels.push(bucket);
  }
  chartData.datasets.push({
        fillColor: 'rgba(0,128,255,0.4)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data:values
    });
  return (
    <div style={{ textAlign: 'center'}}>
      <BarChart data={chartData}   width="400%"
  height={250}
  options={{ maintainAspectRatio: false}}/>
    </div>
  );
};

export default BookingGraph;









    
    // chartData.datasets.push({
    //       // label: "My First dataset",
    //       backgroundColor: '#42A5F5',
    //       borderColor: '#42A5F5',
    //       fillColor: 'rgba(220,20,220,0.5)',
    //       strokeColor: 'rgba(220,220,220,0.8)',
    //       highlightFill: 'rgba(220,220,220,0.75)',
    //       highlightStroke: 'rgba(220,220,220,1)',
    //       data:values
    //     });
    //     values=[...values]
    //     values[values.length-1]=0