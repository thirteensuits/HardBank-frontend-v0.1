import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [CONFIG, SET_CONFIG] = useState({
    BRANCH_NFT_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = 1000000000000000;
    let gasLimit = 285000;
    let totalCostWei = String(cost);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    blockchain.smartContract.methods
      .mint(blockchain.account, 1)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.BRANCH_NFT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);



  return (
      <div>
        {blockchain.account === "" ||
    blockchain.smartContract === null ? (
        <button onClick={() => {dispatch(connect())}}>Connect Wallet</button>
        ) : (
          <>
        <button onClick={() => {dispatch(claimNFTs)}}>Purchase the Branch!!</button>
        </>
    )}

      </div>
  );
}

export default Mint;
