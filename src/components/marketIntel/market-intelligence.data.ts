export type MarketIntelItem = {
  id: string;
  text: string;
  color: 'red' | 'yellow' | 'blue';
};

export const marketIntelligence: MarketIntelItem[] = [
  {
    id: '1',
    text: 'Rate hardening in Cyber market - +15% YoY',
    color: 'red',
  },
  {
    id: '2',
    text: 'New capacity entering Marine market',
    color: 'yellow',
  },
  {
    id: '3',
    text: 'Environmental regulatory changes in CA',
    color: 'blue',
  },
];
