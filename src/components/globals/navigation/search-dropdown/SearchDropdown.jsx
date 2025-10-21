import { useEffect, useRef } from "react";
import "../../../../styles/index.scss";
import { gsap, Power2 }from "gsap";

const SearchDropdown = (props) => {

    const { openSearch } = props;

    const searchRef = useRef();

    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.fromTo(searchRef.current, {
            
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

       openSearch ? tl.current.play() : tl.current.reverse()
        
    }, [openSearch]);



  return (
    <div className='s-dropdown' ref={searchRef}>
        <div className="s-dropdown-con">

            <div><input type="text" placeholder="Search" /></div>
            
            <div className="searched-items-con">
                <span>commonly searched terms</span>
                <div className="searched-items">

                </div>
            </div>

        </div>
    </div>
  )
}

export default SearchDropdown