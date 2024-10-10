import React from 'react';
import { Joystick } from 'react-joystick-component';
import { JoystickComponentProps } from './interfaces';

const JoystickComponent: React.FC<JoystickComponentProps> = ({ onMove, onStop }) => {
  return (
    <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 1000 }}>
      <Joystick
        size={100}
        baseColor="rgba(0,0,0,0.5)"
        stickColor="rgba(255,255,255,0.8)"
        move={onMove}
        stop={onStop}
      />
    </div>
  );
};

export default JoystickComponent;
