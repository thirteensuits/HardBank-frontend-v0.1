import React from "react";
import { Provider } from "react-redux";
import Balance from '../Balance';
import Reward from '../Reward';
import Check from '../Check';
import store5 from "../redux/store5";
import store2 from "../redux/store2";




function Claim() {
  return (
    <div className="claim">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
          <h1 class="font-weight-bold">Claim</h1>
            <br></br>
            <p>
              To continue our example, claiming our order means:
              <br></br>
              &nbsp;&nbsp;1/ asking for the physical branch to be delivered to a physical location of our choice;
              <br></br>
              &nbsp;&nbsp;2/ receiving $TREE rewards for our purchase in our Web3 wallet.
              <br></br>
              <br></br>
              Each BranchNFT can only be claimed once, and will continue to remain in your Web3 wallet as a receipt for your order.
              <br></br>
              <br></br>
              <i>To claim your branch, please do the following:</i>
              <br></br>
              <br></br>
              Click <b>View</b> to see the Index Numbers of the BranchNFTs in your wallet.
              <br></br>
              <Provider store={store5}>
              <Balance />
              </Provider>
              <br></br>        
              Input your physical address and click <b>Register</b> to register the physical address you would like to receive your physical branch.
              <br></br>
              <br></br>
              <form>
              <label>
              <b>Address:</b>&nbsp;&nbsp;
              <input type="text" name="Address" />
              </label>
              &nbsp;&nbsp;<input type="submit" value="Register" />
              </form>
              <br></br>
              To complete the process, click <b>Claim</b>, then input your index number, and then click <b>Confirm</b> to confirm all information.
              <br></br>
              (Remember that each BranchNFT can only be claimed once!!)
              <br></br>
              <br></br>
              <Provider store={store2}>
              <Reward />
              </Provider>
              <br></br>
              Upon completion, you will receive $TREE rewards in your Web3 wallet.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claim;
