import { Box } from '@mui/material';
import QuickActions from '../actions/actions';
import PortfolioGoals from '../portfolioGoals/portfolioGoals';
import WorkQueue from '../workQueue/workQueue';
import MarketIntelligence from '../marketIntel/marketIntel';
import AccountsTable from '../accounts/accounts';

const Main = () => {
  return (
    <main className="px-6  mx-auto">
      <Box
        className="
          grid
         grid-cols-[minmax(0,790px)_360px]
          gap-[17px]
          items-start
          mt-[21px]
          mb-[42px]
        "
      >
        <WorkQueue assigned={12} review={8} referral={3} />

        <Box className="flex flex-row gap-[17px] min-h-[622.5px]">
          <PortfolioGoals />

          <Box className="flex flex-col gap-[17px]">
            <QuickActions />
            <MarketIntelligence />
          </Box>
        </Box>
      </Box>

      <AccountsTable />
    </main>
  );
};

export default Main;
