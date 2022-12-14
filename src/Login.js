import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect2 } from "./redux/blockchain/blockchainActions2";
import store4 from "./redux/store4";


const Login = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [CONFIG, SET_CONFIG] = useState({
    TOKEN_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
  });

  const fetchDataRequest = () => {
    return {
      type: "CHECK_DATA_REQUEST",
    };
  };

  const fetchDataSuccess = (payload) => {
    return {
      type: "CHECK_DATA_SUCCESS",
      payload: payload,
    };
  };

  const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
        let balanceOf = await store4
          .getState()
          .blockchain.smartContract.methods.balanceOf(blockchain.account)
          .call();
        // let cost = await store
        //   .getState()
        //   .blockchain.smartContract.methods.cost()
        //   .call();
  
        dispatch(
          fetchDataSuccess({
            balanceOf,
            // cost,
          })
        );
    };
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
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

  const kan = data.balanceOf / 1000000000000000000 ;


  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);


  return (
      <div>
        {blockchain.account === "" ||
    blockchain.smartContract === null ? (
        <button onClick={() => {dispatch(connect2())}}>Login</button>
        ) : (
          <>
        <p style={{ color: "white" }}><b>CONNECTED!</b>
        &nbsp;&nbsp;

        $TREE BALANCE: {kan} $TREE
        </p>
        </>
    )}

      </div>
  );
}

export default Login;
