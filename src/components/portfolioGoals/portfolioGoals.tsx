'use client';

import { portfolioMetrics } from './portfolio.data';

const BAR_WIDTH = 238;

const PortfolioGoals = () => {
  return (
    <div className="min-w-[320px] rounded-2xl border border-[#313B54] bg-[#1E2233] p-6 text-white">
      <h3 className="mb-6 text-lg font-semibold mt-[10px]">Portfolio goals</h3>

      <div className="space-y-8">
        {portfolioMetrics.map((metric) => {
          const totalPx =
            metric.segments?.reduce((sum, seg) => sum + parseFloat(seg.width), 0) || 1;

          const isRightRoundedBar =
            metric.title === 'New Business Target' || metric.title === 'Annual GWP Target';

          return (
            <div key={metric.title}>
              <div
                className={`text-xs uppercase text-gray-400 ${
                  metric.title === 'Portfolio Loss Ratio Target' ||
                  metric.title === 'Renewal Retention'
                    ? 'mb-[38px]'
                    : 'mb-0'
                }`}
              >
                {metric.title}
              </div>

              <div className="relative">
                {metric.percent !== undefined && (
                  <div
                    className={`absolute z-10 -translate-x-1/2 rounded-md px-3 py-1 text-xs font-semibold text-[#94A3B8] ${
                      metric.title === 'Portfolio Loss Ratio Target' ? '-top-10' : '-top-7'
                    }`}
                    style={{ left: `${metric.percent}%` }}
                  >
                    TG:{metric.toValue}
                  </div>
                )}

                {metric.title === 'Portfolio Loss Ratio Target' && metric.percent !== undefined && (
                  <div
                    className="absolute"
                    style={{
                      left: `${metric.percent}%`,
                      top: '-72%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '8.5px solid transparent',
                      borderRight: '8.5px solid transparent',
                      borderTop: '11px solid #3B82F6',
                    }}
                  />
                )}

                <div
                  className={`flex h-[25px] overflow-hidden`}
                  style={{ width: `${BAR_WIDTH}px` }}
                >
                  {metric.segments?.map((segment, idx) => {
                    const widthPx = parseFloat(segment.width);
                    const widthPercent = (widthPx / totalPx) * 100;
                    const isLast = idx === metric.segments!.length - 1;

                    return (
                      <div
                        key={idx}
                        className="h-full"
                        style={{
                          width: `${widthPercent}%`,
                          background: segment.color,

                          borderTopRightRadius: isRightRoundedBar && isLast ? '16px' : '0',
                          borderBottomRightRadius: isRightRoundedBar && isLast ? '16px' : '0',

                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        }}
                      />
                    );
                  })}

                  {metric.title === 'Portfolio Loss Ratio Target' && (
                    <span className="absolute left-[29%] text-white">{metric.value}</span>
                  )}

                  {metric.title === 'Renewal Retention' && (
                    <span className="absolute left-[45%] text-white">{metric.value}</span>
                  )}

                  {metric.title === 'New Business Target' && (
                    <span className="absolute left-[15%] text-white">{metric.value}</span>
                  )}

                  {metric.title === 'Annual GWP Target' && (
                    <span className="absolute left-[15%] text-white">{metric.value}</span>
                  )}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs">
                {metric.target && <span className="text-gray-400">{metric.target}</span>}
              </div>

              {metric.title === 'Portfolio Loss Ratio Target' && metric.status === 'good' && (
                <div className="relative">
                  <div
                    className="absolute"
                    style={{
                      left: '66%',
                      top: '-6px',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '8.5px solid transparent',
                      borderRight: '8.5px solid transparent',
                      borderBottom: '11px solid #3BB979',
                    }}
                  />
                  <div className="mt-1 ml-[52px] text-xs text-green-400">-6.8% (GOOD)</div>
                </div>
              )}

              {metric.title === 'Renewal Retention' && metric.status === 'good' && (
                <div className="relative">
                  <div
                    className="absolute"
                    style={{
                      left: '69%',
                      top: '-6px',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '8.5px solid transparent',
                      borderRight: '8.5px solid transparent',
                      borderBottom: '11px solid #3BB979',
                    }}
                  />
                  <div className="mt-1 ml-[95px] text-xs text-green-400">ON TARGET</div>
                </div>
              )}

              {metric.status === 'warning' && (
                <div className="mt-1 text-xs text-yellow-400">AT RISK</div>
              )}

              {metric.status === 'bad' && (
                <div className="mt-1 text-xs text-red-400">OFF TARGET</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGoals;
