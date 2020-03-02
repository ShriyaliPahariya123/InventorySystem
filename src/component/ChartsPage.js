import React, { Component } from 'react';
import BookingGraph from './BookingChart';
import ChartMonthly  from './chartsMonthly';
import ChartsControl  from './chartControl';

class ChartsPage extends Component {
    
  state = {
      feeds: [],
      outputType:'weekly'
    };

    componentDidMount() {
        this.fetchFeeds();
      }
    
      fetchFeeds() {
        fetch('http://localhost:3001/product/displayalljso')
        .then(response=>response.json())
        .then(response => this.setState({feeds:response.data}))      
        .catch(err => console.error(err))
        };

    changeOutputHandler= outputType => {
        if(outputType==='weekly'){
            this.setState({outputType:'weekly'});
        } else{
            this.setState({outputType:'monthly'});
        }
    }

    render() {
        console.log(this.state.feeds)
      let  content = (
            <React.Fragment>  
                <ChartsControl activeOutputType={this.state.outputType} 
                onChange={this.changeOutputHandler} />

                <div>
                    {this.state.outputType === 'weekly' ? ( 
                    <BookingGraph feeds={this.state.feeds} /> 
                     ) : ( 
                     <ChartMonthly feeds={this.state.feeds}/> 
                    )}
                </div>
            

            </React.Fragment>
        );
        return (
        <React.Fragment>{content}</React.Fragment>
        
        )
    }    
}
export default ChartsPage;