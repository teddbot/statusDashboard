import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import StatusBadge from './StatusBadge';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{service.description}</p>
        </div>
        <StatusBadge status={service.status} />
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Last updated {formatDistanceToNow(service.lastUpdated)} ago
      </div>
    </div>
  );
};

export default ServiceCard;