const Dashboard = () => {
  return (
    <div className="w-full flex flex-col mt-[50px] gap-5 items-center px-5 mx-auto">
      <div className="flex flex-col w-full gap-1 items-start">
        <label className="">Token Name:</label>
        <input
          className="px-2 py-2 w-full rounded-md"
          placeholder="Token Name"
        />
      </div>

      <div className="flex flex-col w-full gap-1 items-start">
        <label className="">Token Symbol:</label>
        <input
          className="px-2 py-2 w-full rounded-md"
          placeholder="Token Name"
        />
      </div>

      <div className="flex flex-col w-full gap-1 items-start">
        <label className="">Total Supply:</label>
        <input
          className="px-2 py-2 w-full rounded-md"
          placeholder="Token Name"
        />
      </div>

      <button className="w-full">Mint</button>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
