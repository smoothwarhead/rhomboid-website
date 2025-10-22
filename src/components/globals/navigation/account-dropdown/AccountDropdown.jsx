import { useEffect, useRef } from "react";
import "../../../../styles/index.scss";
import { gsap, Power2 }from "gsap";
import { Link } from "react-router";

const AccountDropdown = (props) => {

    const { openAccountDropdown } = props;

       const accountRef = useRef();

    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.fromTo(accountRef.current, {
            
            y:-100,
            
            
        },{
            display: "flex",
            y:0,
            duration: 0.5,
            ease: Power2.Out
        }

    );


    }, []);


    useEffect(() => {

       openAccountDropdown ? tl.current.play() : tl.current.reverse()
        
    }, [openAccountDropdown]);

  return (
        <div className='s-dropdown' ref={accountRef}>
            <div className="s-dropdown-con">
                <div className="a-dropdown-con">
                    <Link>{`Patient login (RhomboidPatient login)`}</Link>
                    <Link>{`Provider login (RhomboidBridge login)`}</Link>

                </div>
    
             
    
            </div>
        </div>
  )
}

export default AccountDropdown