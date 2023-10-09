export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <> // combines two circles
			<circle // left eye
          cx={//centerX 
            - eyeOffsetX} 
          cy={//centerY 
            - eyeOffsetY}
          r={eyeRadius}
        />
      <circle // right eye
          cx={//centerX 
            + eyeOffsetX} 
          cy={//centerY 
            - eyeOffsetY}
          r={eyeRadius}
        />
    </>
);
