import { actions } from './actions.data';

const QuickActions = () => {
  return (
    <div className="w-[260px] rounded-2xl border border-[#313B54] bg-[#1E2233] p-6 text-white">
      <h3 className="mb-4 text-lg font-semibold mt-[10px]">Quick actions</h3>

      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="
              w-full
              rounded-full
              bg-blue-600
              py-2.5
              text-sm
              font-medium
              text-white
              hover:bg-blue-500
              transition
            "
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default QuickActions;
