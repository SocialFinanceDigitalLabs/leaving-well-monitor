import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
	{name: "Southampton", yp: 50, pa: 15, admin: 1},
	{name: "Havering", yp: 40, pa: 10, admin: 1},
	{name: "Leeds", yp: 1, pa: 1, admin: 1}
];
const SimpleBarChart = () => (
	<BarChart width={500} height={500} data={data}
		margin={{top:5, right:30, left:20, bottom:5}}>
		<CartesianGrid strokeDasharray="3,3"/>
		<XAxis dataKey="name"/>
		<YAxis/>
		<Tooltip/>
		<Legend/>
		<Bar dataKey="yp" fill="#8884d8" />
		<Bar dataKey="pa" fill="#82ca9d" />
	</BarChart>
);

//ReactDOM.render(
//	<SimpleBarChart />,
//	document.getElementById('chartcontainer')
//);

export default SimpleBarChart;
