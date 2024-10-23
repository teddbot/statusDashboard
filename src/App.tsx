import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import ServiceCard from './components/ServiceCard';
import IncidentCard from './components/IncidentCard';
import { servicesByProvider, incidentsByProvider } from './data/services';
import type { TelcoProvider, TabItem } from './types';

const tabs: TabItem[] = [
  {
    id: 'safaricom',
    name: 'Safaricom',
    logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=128&h=128&fit=crop&auto=format'
  },
  {
    id: 'vodacom',
    name: 'Vodacom',
    logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=128&h=128&fit=crop&auto=format'
  },
  {
    id: 'vodafone',
    name: 'Vodafone',
    logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=128&h=128&fit=crop&auto=format'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<TelcoProvider>('safaricom');

  const services = servicesByProvider[activeTab];
  const incidents = incidentsByProvider[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="mt-8 space-y-8">
          {/* Overall Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.name} Status
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {services.every(s => s.status === 'operational')
                ? 'All systems operational'
                : 'Some systems are experiencing issues'}
            </p>
          </div>

          {/* Services Grid */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Active Incidents */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Incidents</h2>
            <div className="space-y-4">
              {incidents
                .filter(incident => incident.status === 'ongoing')
                .map(incident => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))}
            </div>
          </div>

          {/* Past Incidents */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Past Incidents</h2>
            <div className="space-y-4">
              {incidents
                .filter(incident => incident.status === 'resolved')
                .map(incident => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;