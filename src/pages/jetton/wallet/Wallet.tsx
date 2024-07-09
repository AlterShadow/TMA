import React, { useState } from "react";
import { AppHeading } from "components/appHeading";
import { StyledBlock, StyledCategoryFields } from "pages/jetton/styled";
import { DataRow } from "pages/jetton/dataRow";
import BigNumberDisplay from "components/BigNumberDisplay";
import { balanceActions } from "pages/jetton/util";
import { TransferAction } from "pages/jetton/actions/transfer";
import useJettonStore from "store/jetton-store/useJettonStore";
import ConnectAction from "pages/jetton/actions/ConnectAction";
import { Box, Link } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { CenteringWrapper } from "components/header/headerSearchBar/styled";
import { CheckWalletBalancePopup } from "components/checkWalletBalancePopup";

export const Wallet = () => {
  const { balance, symbol, jettonLoading, selectedWalletAddress, decimals } = useJettonStore();
  const [params, setParams] = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <StyledBlock sx={{ width: "calc(45% - 15px)" }}>
      <AppHeading
        text={`${!params.get("address") ? "Connected" : ""} Jetton wallet`}
        variant="h4"
        fontWeight={800}
        fontSize={20}
        marginBottom={20}
        color="#161C28"
      />
      <StyledCategoryFields>
        <DataRow
          title="Wallet Address"
          value={selectedWalletAddress}
          dataLoading={jettonLoading}
          address={selectedWalletAddress}
          regularAddress
        />
        <DataRow
          title="Wallet Balance"
          value={
            balance && (
              <>
                <BigNumberDisplay value={balance} decimals={decimals} /> {symbol}
              </>
            )
          }
          dataLoading={jettonLoading}
          // actions={balanceActions}
        />
        <TransferAction />
      </StyledCategoryFields>
      {!selectedWalletAddress && !jettonLoading && (
        <Box sx={{ height: 46, marginTop: 3 }}>
          <ConnectAction />
        </Box>
      )}
    </StyledBlock>
  );
};
