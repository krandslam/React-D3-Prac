import React, {
  useState,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { csv, scaleLinear, max, format, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }
  
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  
  const xValue = d => d.sepal_length; // d.petal_length or d.petal_width
  const xAxisLabel = 'Sepal Length';
  
  const yValue = d => d.sepal_width;
  const yAxisLabel = 'Sepal Width';
  
  
  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
  	.nice();
  
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);
  
  console.log(xScale.ticks());

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
                  x={-yAxisLabelOffset} 
          y = {innerHeight/2}
        <text 
          className="axis-label"
          textAnchor="middle"
        	transform={`translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5}/>
        <text 
          className="axis-label"
          x={innerWidth / 2} 
          y = {innerHeight + xAxisLabelOffset}
          textAnchor="middle">
          {xAxisLabel}
        </text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={7}
        />
      </g>
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
