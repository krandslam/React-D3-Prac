export const FaceContainer = ({children, width, height, centerX, centerY}) => (
	<svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
       // make all the group element to be at the center
      {children}
    </g>
  </svg>
);