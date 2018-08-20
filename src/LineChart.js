import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';


const SimpleLineChart = ({ chartData }) => (
  <ResponsiveContainer width='95%' height={500} >
    <ScatterChart width={500} height={350}>
      <CartesianGrid />
      <XAxis
        dataKey = 'time'
        domain = {['auto', 'auto']}
        name = 'Time'
        tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm Do')}
        type = 'number'
      />
      <YAxis dataKey = 'value' name = 'Value' />
      <Tooltip cursor={{strokeDasharray: "3 3"}} />
      <Legend />
      <Scatter
        data = { chartData[0].values }
        line
        fill='#8884d8'
        lineJointType = 'monotoneX'
        lineType = 'joint'
        name = { chartData[0].name }
      />
      <Scatter
        data = { chartData[1].values }
        line
        fill='#84d888'
        lineJointType = 'monotoneX'
        lineType = 'joint'
        name = { chartData[1].name }
      />
      <Scatter
        data = { chartData[2].values }
        line
        fill='#d88884'
        lineJointType = 'monotoneX'
        lineType = 'joint'
        name = { chartData[2].name }
      />
    </ScatterChart>
  </ResponsiveContainer>
);

SimpleLineChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      value: PropTypes.number
    })
  )
}

export default SimpleLineChart;
