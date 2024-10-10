export interface IJoystickUpdateEvent {
  type: 'move' | 'stop' | 'start';
  x: number | null;
  y: number | null;
  direction: 'FORWARD' | 'RIGHT' | 'LEFT' | 'BACKWARD' | null;
  distance: number | null;
}

export interface JoystickComponentProps {
  onMove: (event: IJoystickUpdateEvent) => void;
  onStop: (event: IJoystickUpdateEvent) => void;
}
