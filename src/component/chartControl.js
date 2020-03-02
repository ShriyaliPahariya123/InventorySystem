import React from 'react';
import './chartControl.css'
const ChartsControl = props => {
    return(
        <div className="chart-control">
            <button className={props.activeOutputType === 'weekly' ? 'active' : ''}
            onClick={props.onChange.bind(this,'weekly')}>
             Weekly
            </button>
            <button className={props.activeOutputType === 'monthly' ? 'active' : ''}
             onClick={props.onChange.bind(this,'monthly')}>
             Monthly
            </button>
        </div>
    );
}

export default ChartsControl;