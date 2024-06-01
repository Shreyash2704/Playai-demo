import React from 'react'
import Styles from './Refferal.module.css'
import refferal from '../../assests/referral_diag-DxJb4giR.svg'

type Props = {}

const Refferal = (props: Props) => {
  return (
    <div className={Styles.RefferalRoot}>
        <div className={Styles.left}>
            <div className={Styles.title}>HOW REFERRAL BOOSTS WORK?</div>
            <div className={Styles.steplist}>
                <div className={Styles.step}>
                    You get points as you build your Syndicate with successful invitees.</div>
                <div className={Styles.step}>You get 
                    <span style={{fontFamily: `"Heading Font", sans-serif`,color: "rgba(238, 75, 75, 1)", fontStyle: "italic",fontWeight:600}}>+20% BOOST</span> when your invitees mint the Player Alpha pass.</div>
                <div className={Styles.step}>And you get <span style={{fontFamily: `"Heading Font", sans-serif`,color: "rgba(238, 75, 75, 1)", fontStyle: "italic",fontWeight:600}}>+10% BOOST</span> when their invites mint the pass.</div>
            </div>
            <button className={Styles.refferal_btn}>CLAIM YOUR PLAYER ALPHA PASS</button>
        </div>
        <div className={Styles.right}>
            <img src={refferal} className={Styles.refferal} alt="refferal" />
        </div>
    </div>
  )
}

export default Refferal