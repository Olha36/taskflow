'use client'
import { InputBase } from '@mui/material';
import { Account, accounts } from './accounts.data';
import { styled, alpha } from '@mui/material/styles';

const statusDotColors: Record<Account['status']['color'], string> = {
  '#3BB979': 'bg-[#3BB979]',
  '#1E40AF': 'bg-[#1E40AF]',
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: '#232838',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    borderRadius: '100px',
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create('width'),
  },
}));

export default function AccountsTable() {
  return (
    <div className="w-full rounded-xl border border-[#313B54] bg-[#1E2233] p-[25px] ">
      <div className="flex items-center gap-[14px] mb-[23px] w-[60%]">
        <h2 className="text-lg font-semibold">My accounts</h2>

        <Search>
          <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <div className="flex gap-2">
          <button className="rounded-full border border-[#3B82F6] px-4 py-1.5 text-xs text-[#3B82F6]">
            Filter
          </button>
          <button className="rounded-full border border-[#3B82F6] px-4 py-1.5 text-xs text-[#3B82F6]">
            Sort
          </button>
          <button className="rounded-full border border-[#3B82F6] px-4 py-1.5 text-xs text-[#3B82F6]">
            Group
          </button>
          <button className="rounded-full bg-[#3B82F6] px-4 py-1.5 text-xs font-medium text-white">
            + New
          </button>
        </div>
      </div>

      <div className=" rounded-xl border border-slate-800 ">
        <table className="w-full border-collapse">
          <thead className="bg-[#252A3D] text-left text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Account name/type</th>
              <th className="px-4 py-3">Line</th>
              <th className="px-4 py-3">Broker</th>
              <th className="px-4 py-3">Renewal date</th>
              <th className="px-4 py-3">Premium</th>
              <th className="px-4 py-3">Rated premium</th>
              <th className="px-4 py-3">Loss ratio</th>
              <th className="px-4 py-3">Appetite</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Triage</th>
              <th className="px-4 py-3">Winnability</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {accounts.map((account) => (
              <tr key={account.name} className="border-t border-slate-800 even:bg-[#252A3D]">
                <td className="px-4 py-4">
                  <div className="font-medium text-[#E5E7EB]">{account.name}</div>
                  <div className="text-xs text-slate-400 text-[#E5E7EB]">{account.subTitle}</div>
                </td>

                <td className="px-4 py-4 text-[#E5E7EB]">{account.line}</td>
                <td className="px-4 py-4 text-[#E5E7EB]">{account.broker}</td>
                <td className="px-4 py-4 text-[#E5E7EB]">{account.renewalDate}</td>
                <td className="px-4 py-4 text-blue-400">{account.premium}</td>
                <td className="px-4 py-4 text-[#E5E7EB]">{account.ratedPremium}</td>

                <td className="px-4 py-4">
                  {/* <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      lossRatioColors[account.lossRatio.color]
                    }`}
                  >
                    {account.lossRatio.value}%
                  </span> */}

                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      color: account.lossRatio.color,
                      backgroundColor: account.lossRatio.bgColor,
                    }}
                  >
                    {account.lossRatio.value}%
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex w-[83px] items-center justify-center rounded-full bg-[#1E40AF] px-3 py-1 text-xs text-[#E5E7EB]">
                    {account.appetite}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${statusDotColors[account.status.color]}`}
                    />
                    <span>{account.status.label}</span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex rounded-full border border-[#3B82F6] px-3 py-1 text-xs text-[#3B82F6]">
                    {account.triage}
                  </span>
                </td>

                {/* <td className="px-4 py-4">
                  <div className="flex items-center gap-2 border border-[#3B82F6]">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-2 w-2 inline-flex rounded-full border border-[#3B82F6] ${
                            i < account.winnability.score ? 'bg-blue-400' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-blue-400">{account.winnability.label}</span>
                  </div>
                </td> */}

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 border border-[#3B82F6] rounded-full px-2 py-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span
                          key={i}
                          className={`inline-flex h-2 w-2 rounded-full border border-[#3B82F6] ${
                            i < account.winnability.score ? 'bg-blue-400' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-blue-400">{account.winnability.label}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-right">
                  <button
                    className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full
                        border border-[#E5E7EB]
                        text-[#E5E7EB]
                        hover:bg-white/10
                        hover:text-white
                        transition
                      "
                    aria-label="Row actions"
                  >
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
