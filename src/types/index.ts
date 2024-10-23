export type ServiceStatus = 'operational' | 'disruption' | 'outage';

export interface Service {
  id: string;
  name: string;
  status: ServiceStatus;
  lastUpdated: Date;
  description: string;
}

export interface Incident {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  status: 'ongoing' | 'resolved';
  startTime: Date;
  endTime?: Date;
}

export type TelcoProvider = 'safaricom' | 'vodacom' | 'vodafone';

export interface TabItem {
  id: TelcoProvider;
  name: string;
  logo: string;
}