import React from 'react'
import { Joystick } from 'react-joystick-component'
import { JoystickComponentProps } from './interfaces'
import styles from './styles.module.scss'

const JoystickComponent: React.FC<JoystickComponentProps> = ({
  onMove,
  onStop,
}) => {
  return (
    <div className={styles.joystick}>
      <Joystick
        size={100}
        baseColor="rgba(0,0,0,0.5)"
        stickColor="rgba(255,255,255,0.8)"
        move={onMove}
        stop={onStop}
      />
    </div>
  )
}

export default JoystickComponent
