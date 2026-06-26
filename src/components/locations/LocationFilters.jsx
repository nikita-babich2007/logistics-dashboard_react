export const LocationFilters = () => {
  return (
    <div className="mb-6 flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
      <input
        type="text"
        placeholder="Search location..."
        className="w-full max-w-xs rounded-md border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
      />
      <select className="rounded-md border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none">
        <option value="">No sort</option>
        <option value="rating_desc">Highest Rating</option>
      </select>
    </div>
  );
};