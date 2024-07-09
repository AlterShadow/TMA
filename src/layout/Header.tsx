import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <div className="w-full max-w-[420px] fixed top-0 mx-auto flex flex-row justify-center items-center px-4 py-3 z-10">
      <TonConnectButton />
    </div>
  );
};

export default Header;
