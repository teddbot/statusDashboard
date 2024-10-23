import { Service, Incident, TelcoProvider } from '../types';

export const servicesByProvider: Record<TelcoProvider, Service[]> = {
  safaricom: [
    {
      id: '1',
      name: 'M-PESA',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Mobile money transfer service'
    },
    {
      id: '2',
      name: 'M-PESA App',
      status: 'disruption',
      lastUpdated: new Date(),
      description: 'Mobile banking application'
    },
    {
      id: '3',
      name: 'MySafaricom App',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Self-service application'
    },
    {
      id: '4',
      name: 'Voice Services',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Voice calls and SMS services'
    },
    {
      id: '5',
      name: 'Internet Services',
      status: 'outage',
      lastUpdated: new Date(),
      description: 'Mobile data and fiber services'
    }
  ],
  vodacom: [
    {
      id: '1',
      name: 'M-PESA',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Mobile money transfer service'
    },
    {
      id: '2',
      name: 'VodaPay',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Digital payments platform'
    },
    {
      id: '3',
      name: 'MyVodacom App',
      status: 'disruption',
      lastUpdated: new Date(),
      description: 'Self-service application'
    },
    {
      id: '4',
      name: 'Voice Network',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Voice calls and messaging'
    },
    {
      id: '5',
      name: '5G Network',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'High-speed mobile network'
    }
  ],
  vodafone: [
    {
      id: '1',
      name: 'MyVodafone App',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Self-service application'
    },
    {
      id: '2',
      name: 'Voice Services',
      status: 'outage',
      lastUpdated: new Date(),
      description: 'Voice calls and messaging'
    },
    {
      id: '3',
      name: 'Mobile Data',
      status: 'operational',
      lastUpdated: new Date(),
      description: '4G/5G mobile network'
    },
    {
      id: '4',
      name: 'Broadband',
      status: 'disruption',
      lastUpdated: new Date(),
      description: 'Fixed line internet services'
    },
    {
      id: '5',
      name: 'TV Services',
      status: 'operational',
      lastUpdated: new Date(),
      description: 'Cable and streaming services'
    }
  ]
};

export const incidentsByProvider: Record<TelcoProvider, Incident[]> = {
  safaricom: [
    {
      id: '1',
      serviceId: '2',
      title: 'M-PESA App Login Issues',
      description: 'Some users experiencing difficulties logging into the M-PESA App.',
      status: 'ongoing',
      startTime: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      serviceId: '5',
      title: 'Internet Service Degradation',
      description: 'Fiber services experiencing intermittent connectivity in Nairobi region.',
      status: 'ongoing',
      startTime: new Date(Date.now() - 7200000)
    }
  ],
  vodacom: [
    {
      id: '1',
      serviceId: '3',
      title: 'MyVodacom App Performance Issues',
      description: 'App experiencing slow response times when accessing account details.',
      status: 'ongoing',
      startTime: new Date(Date.now() - 5400000)
    }
  ],
  vodafone: [
    {
      id: '1',
      serviceId: '2',
      title: 'Voice Service Disruption',
      description: 'Voice calls affected in the Manchester area.',
      status: 'ongoing',
      startTime: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      serviceId: '4',
      title: 'Broadband Connectivity Issues',
      description: 'Some customers experiencing slower than usual speeds.',
      status: 'ongoing',
      startTime: new Date(Date.now() - 7200000)
    }
  ]
};