import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { Incident } from '../types';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-4">
        {incident.status === 'ongoing' ? (
          <AlertTriangle className="text-yellow-500 flex-shrink-0" />
        ) : (
          <CheckCircle2 className="text-green-500 flex-shrink-0" />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{incident.description}</p>
          <div className="mt-4 text-xs text-gray-500">
            Started {formatDistanceToNow(incident.startTime)} ago
            {incident.endTime && ` • Resolved ${formatDistanceToNow(incident.endTime)} ago`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;