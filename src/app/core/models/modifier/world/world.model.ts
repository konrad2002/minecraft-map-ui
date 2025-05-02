export interface World {
  name: string;
  isActive: boolean;
  description: string;
  icon: string;
  author: string;
  spawn: Spawn;
  center: Center;
}

export interface Spawn {
  id: number;
  x: number;
  y: number;
  z: number;
  yaw: number | null;
  pitch: number | null;
}

export interface Center {
  id: number;
  x: number;
  y: number;
  z: number;
  yaw: number | null;
  pitch: number | null;
}
