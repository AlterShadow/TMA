import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <div className="w-full fixed top-0 h-5 bg-white">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold">My React Telegram Web App</div>
        <TonConnectButton />
      </div>
    </div>
  );
};

export default Header;
