'use client';

import { marketIntelligence } from './market-intelligence.data';

const dotColorMap = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
  blue: 'bg-blue-500',
};

const MarketIntelligence = () => {
  return (
    <div className="w-[260px] min-h-[306px] rounded-2xl border border-[#313B54] bg-[#1E2233] p-6 text-white">
      <h3 className="mb-4 text-lg font-semibold">Market intelligence</h3>

      <div className="space-y-4">
        {marketIntelligence.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
          >
            <span className={`mt-1 h-3 w-3 rounded-full ${dotColorMap[item.color]}`} />
            <p className="text-sm leading-relaxed text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketIntelligence;
