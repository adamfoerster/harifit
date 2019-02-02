export interface Progress {
  [month: number]: number;
}

export interface Objective {
  email: string;
  progress: Progress;
  weight: number;
}

export interface Objectives {
  [objective: string]: Objective;
}

export interface User {
  email?: string;
}
