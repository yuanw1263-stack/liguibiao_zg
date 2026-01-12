
export enum WorkflowStatus {
  NOT_STARTED = '未启动',
  PREPARING = '数据准备中',
  PLANNING = '航网编排中',
  CONFIRMING = '保障确认中',
  APPROVING = '公司审批中',
  ACTIVE = '已生效',
  ARCHIVED = '已归档'
}

export interface DepartmentStatus {
  name: string;
  status: 'PENDING' | 'PREPARING' | 'DONE' | 'ISSUE';
  progress: number;
  lastUpdate: string;
  feedback?: string;
}

export interface FlightLeg {
  id: string;
  dep: string;
  arr: string;
  depTime: string;
  arrTime: string;
}

export interface FlightRotation {
  aircraftId: string;
  legs: FlightLeg[];
}

export interface DeviationAlert {
  id: string;
  type: 'DELAY' | 'CAPACITY' | 'FUEL' | 'CREW';
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  message: string;
  timestamp: string;
}
