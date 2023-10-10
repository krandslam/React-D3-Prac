(function (React, ReactDOM, d3) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500;
  const circleRadius = 30;
  const initialMousePosition = { x: width/2, y: height/2}; // put mouse position in center

  const App = () => { // keep updating
    const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
    const handleMouseMove = React.useCallback(event => {
      const { clientX, clientY } = event;
      setMousePosition({ x:clientX, y:clientY }); // update Mouse position
    }, [setMousePosition]);
    
    return (
      React__default.createElement( 'svg', { width: width, height: height, onMouseMove: handleMouseMove },
        React__default.createElement( 'circle', {
          cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })
       )
    );
  };

  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjaXJjbGVSYWRpdXMgPSAzMDtcbmNvbnN0IGluaXRpYWxNb3VzZVBvc2l0aW9uID0geyB4OiB3aWR0aC8yLCB5OiBoZWlnaHQvMn07IC8vIHB1dCBtb3VzZSBwb3NpdGlvbiBpbiBjZW50ZXJcblxuY29uc3QgQXBwID0gKCkgPT4geyAvLyBrZWVwIHVwZGF0aW5nXG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKGluaXRpYWxNb3VzZVBvc2l0aW9uKTtcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgc2V0TW91c2VQb3NpdGlvbih7IHg6Y2xpZW50WCwgeTpjbGllbnRZIH0pOyAvLyB1cGRhdGUgTW91c2UgcG9zaXRpb25cbiAgfSwgW3NldE1vdXNlUG9zaXRpb25dKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfT5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgY3g9e21vdXNlUG9zaXRpb24ueH0gLy8gdXBkYXRlIGNpcmNsZSBwb3NpdGlvbiB0byBNb3VzZSBwb3NpdGlvblxuICAgICAgICBjeT17bW91c2VQb3NpdGlvbi55fVxuICAgICAgICByPXtjaXJjbGVSYWRpdXN9XG4gICAgICAvPlxuICAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBSUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7RUFDeEIsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQ7RUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNO0VBQ2xCLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHQSxjQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztFQUMzRSxFQUFFLE1BQU0sZUFBZSxHQUFHQyxpQkFBVyxDQUFDLEtBQUssSUFBSTtFQUMvQyxJQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0VBQ3ZDLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQy9DLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztFQUN6QjtFQUNBLEVBQUU7RUFDRixJQUFJQyx1Q0FBSyxPQUFPLEtBQU0sRUFBQyxRQUFRLE1BQU8sRUFBQyxhQUFhO0VBQ3BELE1BQU1BO0VBQ04sUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFFLEVBQ3BCLElBQUksYUFBYSxDQUFDLENBQUUsRUFDcEIsR0FBRyxjQUFhLENBQ2hCO0VBQ1IsTUFBVztFQUNYLElBQUk7RUFDSixDQUFDLENBQUM7QUFDRjtFQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsOEJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDOzs7OyJ9