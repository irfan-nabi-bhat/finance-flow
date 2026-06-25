const Navbar = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>
        <p className="text-slate-400">
          Welcome back to FinanceFlow
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-800 px-4 py-2 rounded-lg outline-none"
        />

        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
};

export default Navbar;