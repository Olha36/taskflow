export type Account = {
  name: string;
  subTitle: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: {
    value: number;
    color: '#FFFFFF' | '#041B2E';
    bgColor: '#3BB979' | '#FDD261' | '#B93B3B';
  };
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS';
  status: {
    label: 'Active' | 'Under review';
    color: '#1E40AF' | '#3BB979';
  };
  triage: number;
  winnability: {
    label: 'Very Strong' | 'Strong' | 'Medium';
    score: number;
  };
};

export const accounts: Account[] = [
  {
    name: 'NAMEX Tech Solutions',
    subTitle: 'Large Enterprise',
    line: 'D&O Liability',
    broker: 'Willis Towers',
    renewalDate: '04/16/2025',
    premium: '$2.3M',
    ratedPremium: '$2.8M',
    lossRatio: {
      value: 32,
      color: '#FFFFFF',
      bgColor: '#3BB979',
    },
    appetite: 'HIGH',
    status: {
      label: 'Active',
      color: '#3BB979',
    },
    triage: 180,
    winnability: {
      label: 'Very Strong',
      score: 4,
    },
  },
  {
    name: 'Alliance Healthcare Systems',
    subTitle: 'Mid-Market',
    line: 'Medical Malpractice',
    broker: 'Aon Risk',
    renewalDate: '06/30/2025',
    premium: '$1.7M',
    ratedPremium: '$1.9M',
    lossRatio: {
      value: 38,
      color: '#041B2E',
      bgColor: '#FDD261',
    },
    appetite: 'MEDIUM',
    status: {
      label: 'Under review',
      color: '#1E40AF',
    },
    triage: 165,
    winnability: {
      label: 'Strong',
      score: 3,
    },
  },
  {
    name: 'Maritime Logistics Corp',
    subTitle: 'Shipping/Logistics',
    line: 'Marine Cargo',
    broker: 'Marsh McLennan',
    renewalDate: '09/05/2025',
    premium: '$875K',
    ratedPremium: '$920K',
    lossRatio: {
      value: 25,
      color: '#FFFFFF',
      bgColor: '#3BB979',
    },
    appetite: 'HIGH',
    status: {
      label: 'Active',
      color: '#3BB979',
    },
    triage: 182,
    winnability: {
      label: 'Very Strong',
      score: 4,
    },
  },
  {
    name: 'GreenField Energy Ltd',
    subTitle: 'Energy Sector',
    line: 'Environmental Liability',
    broker: 'Aon Risk',
    renewalDate: '07/22/2025',
    premium: '$1.2M',
    ratedPremium: '$1.4M',
    lossRatio: {
      value: 67,
      color: '#FFFFFF',
      bgColor: '#B93B3B',
    },
    appetite: 'CAUTIOUS',
    status: {
      label: 'Under review',
      color: '#1E40AF',
    },
    triage: 158,
    winnability: {
      label: 'Medium',
      score: 2,
    },
  },
];
