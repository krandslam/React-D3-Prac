(function (React$1, ReactDOM, d3) {
  'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const csvUrl =
    'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv';

  const useData = () => {
    const [data, setData] = React$1.useState(null);

    React$1.useEffect(() => {
      const row = (d) => {
        d.sepal_length = +d.sepal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_length = +d.petal_length;
        d.petal_width = +d.petal_width;
        return d;
      };
      d3.csv(csvUrl, row).then(setData);
    }, []);
  	return data;
  };

  const AxisBottom = ({xScale, innerHeight, tickFormat, tickOffset = 3}) => 
  	xScale.ticks().map(tickValue => (
      React.createElement( 'g', { className: "tick", key: tickValue, transform: `translate(${xScale(tickValue)},0)` },
        React.createElement( 'line', { y2: innerHeight }),
        React.createElement( 'text', { dy: ".71em", style: {textAnchor: 'middle'}, y: innerHeight + tickOffset },
          tickFormat(tickValue)
        )
      )
    ));

  const AxisLeft = ({yScale, innerWidth, tickOffset = 3 }) => 
  	yScale.ticks().map(tickValue => (
      React.createElement( 'g', { className: "tick", transform: `translate(0,${yScale(tickValue)})` },
        React.createElement( 'line', { x2: innerWidth }),
        React.createElement( 'text', { 
          key: tickValue, style: {textAnchor: 'end'}, dy: ".32em", x: -tickOffset },
          tickValue
        )
      )
    ));

  const Marks = ({ data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius }) => 
  	data.map((d) => (
      React.createElement( 'circle', {
        className: "mark", cx: xScale(xValue(d)), cy: yScale(yValue(d)), r: circleRadius },
        React.createElement( 'title', null, tooltipFormat(xValue(d)) )
      )
    ));

  const width = 960;
  const height = 500;
  const margin = { top: 20, right: 30, bottom: 65, left: 90 };
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 40;

  const App = () => {
    const data = useData();

    if (!data) {
      return React$1__default.createElement( 'pre', null, "Loading..." );
    }
    
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    
    const xValue = d => d.sepal_length; // d.petal_length or d.petal_width
    const xAxisLabel = 'Sepal Length';
    
    const yValue = d => d.sepal_width;
    const yAxisLabel = 'Sepal Width';
    
    
    const siFormat = d3.format('.2s');
    const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
    	.nice();
    
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([0, innerHeight]);
    
    console.log(xScale.ticks());

    return (
      React$1__default.createElement( 'svg', { width: width, height: height },
        React$1__default.createElement( 'g', { transform: `translate(${margin.left},${margin.top})` },
          React$1__default.createElement( AxisBottom, { 
            xScale: xScale, innerHeight: innerHeight, tickFormat: xAxisTickFormat, tickOffset: 5 }), "x=", -yAxisLabelOffset, " y = ", innerHeight/2,
          React$1__default.createElement( 'text', { 
            className: "axis-label", textAnchor: "middle", transform: `translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)` },
            yAxisLabel
          ),
          React$1__default.createElement( AxisLeft, { yScale: yScale, innerWidth: innerWidth, tickOffset: 5 }),
          React$1__default.createElement( 'text', { 
            className: "axis-label", x: innerWidth / 2, y: innerHeight + xAxisLabelOffset, textAnchor: "middle" },
            xAxisLabel
          ),
          React$1__default.createElement( Marks, { 
            data: data, xScale: xScale, yScale: yScale, xValue: xValue, yValue: yValue, tooltipFormat: xAxisTickFormat, circleRadius: 7 })
        )
      )
    );
  };
  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1__default.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInVzZURhdGEuanMiLCJBeGlzQm90dG9tLmpzIiwiQXhpc0xlZnQuanMiLCJNYXJrcy5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0XG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzdiB9IGZyb20gJ2QzJztcblxuY29uc3QgY3N2VXJsID1cbiAgJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vY3VycmFuL2EwOGExMDgwYjg4MzQ0YjBjOGE3L3Jhdy8wZTdhOWIwYTVkMjI2NDJhMDZkM2Q1YjliY2JhZDk4OTBjOGVlNTM0L2lyaXMuY3N2JztcblxuZXhwb3J0IGNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gKGQpID0+IHtcbiAgICAgIGQuc2VwYWxfbGVuZ3RoID0gK2Quc2VwYWxfbGVuZ3RoO1xuICAgICAgZC5zZXBhbF93aWR0aCA9ICtkLnNlcGFsX3dpZHRoO1xuICAgICAgZC5wZXRhbF9sZW5ndGggPSArZC5wZXRhbF9sZW5ndGg7XG4gICAgICBkLnBldGFsX3dpZHRoID0gK2QucGV0YWxfd2lkdGg7XG4gICAgICByZXR1cm4gZDtcbiAgICB9O1xuICAgIGNzdihjc3ZVcmwsIHJvdykudGhlbihzZXREYXRhKTtcbiAgfSwgW10pO1xuXHRyZXR1cm4gZGF0YTtcbn07IiwiZXhwb3J0IGNvbnN0IEF4aXNCb3R0b20gPSAoe3hTY2FsZSwgaW5uZXJIZWlnaHQsIHRpY2tGb3JtYXQsIHRpY2tPZmZzZXQgPSAzfSkgPT4gXG5cdHhTY2FsZS50aWNrcygpLm1hcCh0aWNrVmFsdWUgPT4gKFxuICAgIDxnIGNsYXNzTmFtZT1cInRpY2tcIiBrZXk9e3RpY2tWYWx1ZX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eFNjYWxlKHRpY2tWYWx1ZSl9LDApYH0+XG4gICAgICA8bGluZSB5Mj17aW5uZXJIZWlnaHR9IC8+XG4gICAgICA8dGV4dCBkeT1cIi43MWVtXCIgc3R5bGU9e3t0ZXh0QW5jaG9yOiAnbWlkZGxlJ319IHk9e2lubmVySGVpZ2h0ICsgdGlja09mZnNldH0+XG4gICAgICAgIHt0aWNrRm9ybWF0KHRpY2tWYWx1ZSl9XG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICApKTsiLCJleHBvcnQgY29uc3QgQXhpc0xlZnQgPSAoe3lTY2FsZSwgaW5uZXJXaWR0aCwgdGlja09mZnNldCA9IDMgfSkgPT4gXG5cdHlTY2FsZS50aWNrcygpLm1hcCh0aWNrVmFsdWUgPT4gKFxuICAgIDxnIGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwke3lTY2FsZSh0aWNrVmFsdWUpfSlgfT5cbiAgICAgIDxsaW5lIHgyPXtpbm5lcldpZHRofSAvPlxuICAgICAgPHRleHQgXG4gICAgICAgIGtleT17dGlja1ZhbHVlfVxuICAgICAgICBzdHlsZT17e3RleHRBbmNob3I6ICdlbmQnfX0gXG4gICAgICAgIGR5PVwiLjMyZW1cIiBcbiAgICAgICAgeCA9IHstdGlja09mZnNldH1cbiAgICAgID5cbiAgICAgICAge3RpY2tWYWx1ZX1cbiAgICAgIDwvdGV4dD5cbiAgICA8L2c+XG4gICkpOyIsImV4cG9ydCBjb25zdCBNYXJrcyA9ICh7IGRhdGEsIHhTY2FsZSwgeVNjYWxlLCB4VmFsdWUsIHlWYWx1ZSwgdG9vbHRpcEZvcm1hdCwgY2lyY2xlUmFkaXVzIH0pID0+IFxuXHRkYXRhLm1hcCgoZCkgPT4gKFxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgY3g9e3hTY2FsZSh4VmFsdWUoZCkpfVxuICAgICAgY3k9e3lTY2FsZSh5VmFsdWUoZCkpfVxuICAgICAgcj17Y2lyY2xlUmFkaXVzfVxuICAgID5cbiAgICAgIDx0aXRsZT57dG9vbHRpcEZvcm1hdCh4VmFsdWUoZCkpfTwvdGl0bGU+XG4gICAgPC9jaXJjbGU+XG4gICkpOyIsImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNzdiwgc2NhbGVMaW5lYXIsIG1heCwgZm9ybWF0LCBleHRlbnQgfSBmcm9tICdkMyc7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSAnLi91c2VEYXRhJztcbmltcG9ydCB7IEF4aXNCb3R0b20gfSBmcm9tICcuL0F4aXNCb3R0b20nO1xuaW1wb3J0IHsgQXhpc0xlZnQgfSBmcm9tICcuL0F4aXNMZWZ0JztcbmltcG9ydCB7IE1hcmtzIH0gZnJvbSAnLi9NYXJrcyc7XG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMzAsIGJvdHRvbTogNjUsIGxlZnQ6IDkwIH07XG5jb25zdCB4QXhpc0xhYmVsT2Zmc2V0ID0gNTA7XG5jb25zdCB5QXhpc0xhYmVsT2Zmc2V0ID0gNDA7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZURhdGEoKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPHByZT5Mb2FkaW5nLi4uPC9wcmU+O1xuICB9XG4gIFxuICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgXG4gIGNvbnN0IHhWYWx1ZSA9IGQgPT4gZC5zZXBhbF9sZW5ndGg7IC8vIGQucGV0YWxfbGVuZ3RoIG9yIGQucGV0YWxfd2lkdGhcbiAgY29uc3QgeEF4aXNMYWJlbCA9ICdTZXBhbCBMZW5ndGgnO1xuICBcbiAgY29uc3QgeVZhbHVlID0gZCA9PiBkLnNlcGFsX3dpZHRoO1xuICBjb25zdCB5QXhpc0xhYmVsID0gJ1NlcGFsIFdpZHRoJztcbiAgXG4gIFxuICBjb25zdCBzaUZvcm1hdCA9IGZvcm1hdCgnLjJzJyk7XG4gIGNvbnN0IHhBeGlzVGlja0Zvcm1hdCA9IHRpY2tWYWx1ZSA9PiBzaUZvcm1hdCh0aWNrVmFsdWUpLnJlcGxhY2UoJ0cnLCAnQicpO1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4VmFsdWUpKVxuICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gIFx0Lm5pY2UoKTtcbiAgXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB5VmFsdWUpKVxuICAgIC5yYW5nZShbMCwgaW5uZXJIZWlnaHRdKTtcbiAgXG4gIGNvbnNvbGUubG9nKHhTY2FsZS50aWNrcygpKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgfT5cbiAgICAgICAgPEF4aXNCb3R0b20gXG4gICAgICAgICAgeFNjYWxlPXt4U2NhbGV9IFxuICAgICAgICAgIGlubmVySGVpZ2h0PXtpbm5lckhlaWdodH1cbiAgICAgICAgICB0aWNrRm9ybWF0PXt4QXhpc1RpY2tGb3JtYXR9XG4gICAgICAgICAgdGlja09mZnNldD17NX1cbiAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHg9ey15QXhpc0xhYmVsT2Zmc2V0fSBcbiAgICAgICAgICB5ID0ge2lubmVySGVpZ2h0LzJ9XG4gICAgICAgIDx0ZXh0IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImF4aXMtbGFiZWxcIlxuICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICBcdHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgkey15QXhpc0xhYmVsT2Zmc2V0fSwke2lubmVySGVpZ2h0LzJ9KSByb3RhdGUoLTkwKWB9XG4gICAgICAgID5cbiAgICAgICAgICB7eUF4aXNMYWJlbH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgICA8QXhpc0xlZnQgeVNjYWxlPXt5U2NhbGV9IGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IHRpY2tPZmZzZXQ9ezV9Lz5cbiAgICAgICAgPHRleHQgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXhpcy1sYWJlbFwiXG4gICAgICAgICAgeD17aW5uZXJXaWR0aCAvIDJ9IFxuICAgICAgICAgIHkgPSB7aW5uZXJIZWlnaHQgKyB4QXhpc0xhYmVsT2Zmc2V0fVxuICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgICB7eEF4aXNMYWJlbH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgICA8TWFya3MgXG4gICAgICAgICAgZGF0YT17ZGF0YX0gXG4gICAgICAgICAgeFNjYWxlPXt4U2NhbGV9IFxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfSBcbiAgICAgICAgICB4VmFsdWU9e3hWYWx1ZX0gXG4gICAgICAgICAgeVZhbHVlPXt5VmFsdWV9XG4gICAgICAgICAgdG9vbHRpcEZvcm1hdD17eEF4aXNUaWNrRm9ybWF0fVxuICAgICAgICAgIGNpcmNsZVJhZGl1cz17N31cbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3N2IiwiUmVhY3QiLCJmb3JtYXQiLCJzY2FsZUxpbmVhciIsImV4dGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBTUEsTUFBTSxNQUFNO0VBQ1osRUFBRSxzSEFBc0gsQ0FBQztBQUN6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