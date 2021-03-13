import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default class StockChart extends React.Component {
    constructor(props)
    {
        super(props) 
        this.data = {
            labels: [],
            datasets: [
                {
                label: '차트',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
                }
            ]
        };

    }

    componentDidMount() {
        this.data.labels.push('a');
        this.data.datasets[0].data.push(60);
    
        console.log(this.data.datasets[0].data);
    }

    render() {
        return (
        <div>
            <Line ref="chart" data={this.data} />
        </div>
        );
    }
}
