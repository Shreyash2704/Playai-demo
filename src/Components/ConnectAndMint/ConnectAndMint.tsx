import React from "react";
import Styles from "./ConnectAndMint.module.css";
import PlayaiLogo from "../../assests/logo_playAI-8TnM1XjP.svg";
type Props = {};

const ConnectAndMint = (props: Props) => {
  return (
    <div className={Styles.ConnectRoot} id="EnterOasis">
      <div className={Styles.title}>
        <div className={Styles.title1}>
          <span>JOIN</span> THE COLLECTIVE.
        </div>
        <div className={Styles.title2}>
          BE THE <span>PLAYER ALPHA.</span>
        </div>
        <div className={Styles.title3}>PLAY. STREAM. EARN</div>
        <div className={Styles.title4}>
          PART OF THE <img src={PlayaiLogo} height={30} width={30} />
          <span>PLAY</span> AI NETWORK
        </div>
      </div>
      <button className={Styles.ConnectBtn}>COnnect and Mint</button>
    </div>
  );
};

export default ConnectAndMint;
