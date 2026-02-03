import { useState } from 'react';
import { Box, Button } from '@mui/material';

type Filter = 'assigned' | 'review' | 'referral';

const Buttons = ({
  assigned,
  review,
  referral,
}: {
  assigned: number;
  review: number;
  referral: number;
}) => {
  const [active, setActive] = useState<Filter>('assigned');

  return (
    <Box display="flex" gap={1}>
      <Button
        variant={active === 'assigned' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'none' }}
        onClick={() => setActive('assigned')}
      >
        Assigned to me ({assigned})
      </Button>

      <Button
        variant={active === 'review' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'none' }}
        onClick={() => setActive('review')}
      >
        Pending Review ({review})
      </Button>

      <Button
        variant={active === 'referral' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'none' }}
        onClick={() => setActive('referral')}
      >
        Referrals ({referral})
      </Button>
    </Box>
  );
}

export default Buttons;