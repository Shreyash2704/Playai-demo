import React, { useEffect, useRef } from 'react'
import Styles from './LandingAnimation.module.css'
import PlayAiLogo from '../../assests/logo_playAI-8TnM1XjP.svg'
import './custom.css'
type Props = {}

const LandingAnimation = (props: Props) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(sectionRef.current){
                const rect = sectionRef.current.getBoundingClientRect();
                const innerSections = sectionRef.current.querySelectorAll<HTMLDivElement>('.session');
                
                innerSections.forEach((innerSection, index) => {
                        innerSection.classList.remove('active');
                });
                var top = rect.top;
                if(top < 9 && top > -100){
                    innerSections[0].classList.add("active")
                }
                else if(top < -100 && top > -600){
                    innerSections[1].classList.add("active")
                }
                else if(top < -600 && top > -1200){
                    innerSections[2].classList.add("active")
                }
                else{
                    innerSections[3].classList.add("active")
                }
                
                
            
            }
            
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className={Styles.LandingAnimationRoot} ref={sectionRef}>
        <div className={Styles.topSection}>
            <div className={Styles.titlelogo}>
                <img src={PlayAiLogo} height={20} width={20}/>
                <span>PLAY</span> AI
            </div>
            <div className={Styles.enteroasis}>
                <a href="#EnterOasis">ENTER<span>OASIS</span></a>
            </div>
        </div>
        <div className={`${Styles.section2} session`}>
            <div className={Styles.title}>
                <div className={Styles.title1}><span>PLAY</span>COLLECTIVE</div>
                <div className={Styles.title2}>PLAY. STREAM. EARN <span>ARE YOU READY, PLAYERS?</span></div>
            </div>
        </div>

        <div className={`${Styles.section3} session`}>
            <div className={Styles.title}>
                <div className={Styles.title1}>
                    <span>BE PART of Something</span>
                    <span>BEyond just gameplay</span>
                </div>
                <div className={Styles.title2}>This is your calling to be part of the Collective - an elite<br /> group of games and players</div>
            </div>
        </div>

        <div className={`${Styles.section4} session`}>
            <div className={Styles.title}>
                <div className={Styles.title1}>
                    <span>SET A STAGE</span>
                    <span>FOR THE OASIS</span>
                </div>
                <div className={Styles.title2}>BE THE FIRST SET OF PLAYERS THAT JOIN TO<br></br>CREATE THE OASIS. BRING YOUR TRIBE TO BUILD A SYNDICATE</div>
            </div>
        </div>

        <div className={`${Styles.section5} session`}>
            <div className={Styles.title}>
                <div className={Styles.title1}>
                    <span>Claim your</span>
                    <span>Collective alpha</span>
                    <span>Player pass</span>
                </div>
                <div className={Styles.title2}>MINT YOUR NFT TO GET AN EDGE WHILE STREAMING YOUR GAMEPLAY <br></br>WITH THE PLAY COLLECTIVE</div>
            </div>
        </div>
    </div>
  )
}

export default LandingAnimation