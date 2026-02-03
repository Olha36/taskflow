export type WorkQueueStatus = 'new' | 'pending' | 'completed';

export type WorkQueueItem = {
  id: string;
  originator: {
    initials: string;
    name: string;
  };
  client: string;
  line: string;
  type: string;
  status: WorkQueueStatus;
  created: string;
};

export const workQueueData: WorkQueueItem[] = [
  {
    id: '1',
    originator: { initials: 'SM', name: 'Sam Masters' },
    client: 'NAMEX Tech Solutions',
    line: 'Cyber Liability',
    type: 'Underwriter Referral',
    status: 'new',
    created: '04/16/2025',
  },
  {
    id: '2',
    originator: { initials: 'AW', name: 'Annalise Willis' },
    client: 'Maritime Logistics Corp',
    line: 'Marine Cargo',
    type: 'Underwriter Referral',
    status: 'new',
    created: '04/20/2025',
  },
  {
    id: '3',
    originator: { initials: 'PD', name: 'Patrick Devenport' },
    client: 'GreenField Energy Ltd',
    line: 'Environmental',
    type: 'Loss Control Request',
    status: 'new',
    created: '04/16/2025',
  },
  {
    id: '4',
    originator: { initials: 'AK', name: 'Ana Killian' },
    client: 'NorthStar Financial Group',
    line: 'D&O Liability',
    type: 'Underwriter Referral',
    status: 'pending',
    created: '04/22/2025',
  },
  {
    id: '5',
    originator: { initials: 'AK', name: 'Ana Killian' },
    client: 'Alliance Healthcare Systems',
    line: 'Medical Malpractice',
    type: 'Email',
    status: 'completed',
    created: '04/28/2025',
  },
  {
    id: '6',
    originator: { initials: 'MK', name: 'Me' },
    client: 'QuantumTech Industries',
    line: 'Product Liability',
    type: 'Email',
    status: 'completed',
    created: '04/20/2025',
  },
];
