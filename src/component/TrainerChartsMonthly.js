import React from 'react';
import { Line as BarChart } from 'react-chartjs';

const BOOKINGS_BUCKETS = {
    'Janurary':'Jan',
    'Febrary':'Feb',
    'March':'Mar',
    'April':'Apr',
    'May':'May',
    'June':'Jun',
    'July':'Jul',
    'August':'Aug',
    'September':'Sep',
    'October':'Oct',
    'November':'Nov',
    'December':'Dec'
};

const ChartMonthly = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  console.log(props.feeds);
  for(const bucket in BOOKINGS_BUCKETS){
    const filteredTempCount=props.feeds.reduce((prev,current)=>{
      if(current.trainerDoj.substring(4, 7)===BOOKINGS_BUCKETS[bucket]){
        return prev+1;
      }  else{
        return prev;
      }
    },0);
    values.push(filteredTempCount);
    console.log(values)
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
    <div style={{ textAlign: 'center'}} >
      <BarChart data={chartData}   width="400%"
  height={250}
  options={{ maintainAspectRatio: false}}/>
  
    </div>
  );
};

export default ChartMonthly;