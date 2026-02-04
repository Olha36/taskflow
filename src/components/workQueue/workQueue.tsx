'use client';

import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { workQueueData, WorkQueueItem } from './work-queue.data';

type WorkQueueProps = {
  assigned: number;
  review: number;
  referral: number;
};

const statusMap: Record<WorkQueueItem['status'], { label: string; dot: string }> = {
  new: { label: 'New', dot: 'bg-blue-500' },
  pending: { label: 'Pending Review', dot: 'bg-yellow-400' },
  completed: { label: 'Completed', dot: 'bg-green-500' },
};

const WorkQueue = ({ assigned, review, referral }: WorkQueueProps) => {
  const filters = [
    { key: 'assigned', label: 'Assigned to me', count: assigned },
    { key: 'review', label: 'Pending Review', count: review },
    { key: 'referral', label: 'Referrals', count: referral },
  ] as const;

  type Filter = (typeof filters)[number]['key'];
  const [active, setActive] = useState<Filter>('assigned');

  return (
    <div className="w-full rounded-xl border border-[#313B54] bg-[#1E2233] p-[25px] max-w-[790px] ">
      <Typography className="text-xl font-semibold text-white" sx={{marginBottom: '20px'}}>Work Queue</Typography>

      <Box display="flex" gap={1} mb={4}>
        {filters.map(({ key, label, count }) => (
          <Button
            key={key}
            variant={active === key ? 'contained' : 'outlined'}
            sx={{
              textTransform: 'none',
              color: active === key ? '#FFFFFF' : '#C5C9D3',
            }}
            onClick={() => setActive(key)}
          >
            {label} ({count})
          </Button>
        ))}
      </Box>

      <div className="overflow-x-auto">
        <div className="max-w-full rounded-xl border-0 bg-[#1E2233]">
          <div
            className="grid grid-cols-[140px_1.4fr_1fr_130px_90px_40px]
 bg-white/5 px-4 py-3 text-sm text-gray-400"
          >
            <div>ORIGINATOR</div>
            <div>CLIENT / LINE</div>
            <div>TYPE</div>
            <div>STATUS</div>
            <div>CREATED</div>
            <div />
          </div>

          <div>
            {workQueueData.map((item) => {
              const status = statusMap[item.status];

              return (
                <div
                  key={item.id}
                  className="
                    grid grid-cols-[140px_1.4fr_1fr_130px_90px_40px]

                    items-start
                    px-4 py-4
                    border-t border-white/5
                    even:bg-[#252A3D]
                    hover:bg-white/5
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {item.originator.initials}
                    </div>
                    <span className="text-white text-[12px]">{item.originator.name}</span>
                  </div>

                  <div>
                    <div className="font-medium text-white text-[12px] leading-tight">
                      {item.client}
                    </div>
                    <div className="text-sm text-gray-400 text-[12px]">{item.line}</div>
                  </div>

                  <div className="text-white text-[12px]">{item.type}</div>

                  <div className="flex items-center gap-2 text-white text-[12px]">
                    <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                    <span>{status.label}</span>
                  </div>

                  <div className="text-white text-[12px]">{item.created}</div>

                  <div className="flex justify-end">
                    <button
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full
                        border border-white/40
                        text-white/80
                        hover:bg-white/10
                        hover:text-white
                        transition
                      "
                      aria-label="Row actions"
                    >
                      ⋮
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkQueue;
