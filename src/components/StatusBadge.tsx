import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import type { ServiceStatus } from '../types';

interface StatusBadgeProps {
  status: ServiceStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusConfig = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return {
          icon: CheckCircle,
          text: 'Operational',
          className: 'bg-green-100 text-green-800',
          iconClass: 'text-green-500'
        };
      case 'disruption':
        return {
          icon: AlertCircle,
          text: 'Service Disruption',
          className: 'bg-yellow-100 text-yellow-800',
          iconClass: 'text-yellow-500'
        };
      case 'outage':
        return {
          icon: XCircle,
          text: 'Service Outage',
          className: 'bg-red-100 text-red-800',
          iconClass: 'text-red-500'
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.className}`}>
      <Icon size={16} className={`mr-1.5 ${config.iconClass}`} />
      {config.text}
    </span>
  );
};

export default StatusBadge;