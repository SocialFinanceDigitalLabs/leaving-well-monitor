import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
import SimpleLineChart from './LineChart';


const data = [
	{name: "Havering",
         values: [
	  {time:1234678, value:12},
	  {time:1234679, value:10},
	  {time:1234680, value:5},
	  {time:1234682, value:19},
	  {time:1234689, value:15},
	  {time:1234690, value:13}
	]},
	{name: "Southampton",
         values: [
	  {time:1234678, value:9},
	  {time:1234679, value:12},
	  {time:1234680, value:13},
	  {time:1234682, value:15},
	  {time:1234689, value:14},
	  {time:1234690, value:19}
	]},
	{name: "Leeds",
         values: [
	  {time:1234678, value:1},
	  {time:1234679, value:2},
	  {time:1234680, value:1},
	  {time:1234682, value:2.5},
	  {time:1234689, value:1},
	  {time:1234690, value:0}
	]}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Leaving Well Monitor</h1>
        </header>
        <div className="App-intro">
          Monitoring the Leaving well project.
        </div>
	<div>
        	<BarChart/>
        	<SimpleLineChart chartData={data} />
	</div>
      </div>
    );
  }
}

export default App;
