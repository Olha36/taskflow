export type PortfolioSegment = {
  width: string;
  color: string; 
  borderRadius?: string;
};

export type PortfolioMetric = {
  title: string;
  value: string;
  toValue?: string;
  target?: string;
  percent?: number;
  status?: 'good' | 'warning' | 'bad';
  segments?: PortfolioSegment[];
};

export const portfolioMetrics: PortfolioMetric[] = [
  {
    title: 'Portfolio Loss Ratio Target',
    value: '48.2%',
    toValue: '55%',
    percent: 48.2,
    status: 'good',
    segments: [
      { width: '38.24%', color: '#22C55E' }, 
      { width: '23.95%', color: '#FACC15' },
      { width: '37.81%', color: '#EF4444' }, 
    ],
  },
  {
    title: 'Renewal Retention',
    value: '88%',
    toValue: '85-90%',
    percent: 50,
    status: 'good',
    segments: [
      { width: '42px', color: '#EF4444' },
      { width: '80px', color: '#FACC15' },
      { width: '34px', color: '#22C55E' },
      { width: '82px', color: '#FACC15' },
    ],
  },
  {
    title: 'New Business Target',
    value: '$8.1M',
    target: '$12M',
    percent: 67,
    segments: [
      { width: '99px', color: 'linear-gradient(270deg, #3B82F6 0%, #313853 100%)', borderRadius: '4px 20px 4px 20px' },
      { width: '139px', color: '#313853' },
    ],
  },
  {
    title: 'Annual GWP Target',
    value: '$28.4M',
    target: '$42M',
    percent: 68,
    segments: [
      { width: '99px', color: 'linear-gradient(270deg, #3B82F6 0%, #313853 100%)' },
      { width: '139px', color: '#313853' },
    ],
  },
];
