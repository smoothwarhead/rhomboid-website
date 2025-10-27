import { useEffect, useRef, forwardRef } from 'react'
import { gsap, Power2, Power3 }from "gsap";
import { Link } from 'react-router';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const MainDropdown = forwardRef(({ contents }, ref, innerRef) => {

    // const { mainDropdown, contents } = props;

    // const navRef = useRef();
    // const slideRef = useRef();
    // const tl = useRef();

 

    // useEffect(() => {
    //     tl.current = gsap.timeline({ paused: true });

    //     tl.current.fromTo([navRef.current, slideRef.current], {            
    //             y:-10,                
                
    //         },{
    //             display: "block",
    //             y:  0,
    //             duration: 0.5,
    //             ease: Power3.easeInOut

    //         }

    //     )


    // }, []);


    // useEffect(() => {

    //    mainDropdown ? tl.current.play() : tl.current.reverse()
        
    // }, [mainDropdown]);




  return (
    <div className='main-dropdown' ref={ref}>
        <div className="main-slide" ref={innerRef}>
            <div className="main-slide-con">
                
                <div className="main-slide-con-top">
                    {!contents ? <div></div> :
                        contents.map((c,i) => (
                            <div className="main-dropdown-item" key={i}>
                                <div className="main-dropdown-item-name">{c.name}</div>
                                <div className="md-links">
                                    {
                                        c.items.map((item, i) => (
                                            <Link 
                                                className="md-con-link" 
                                                key={i}
                                                to={item.link}
                                            >
                                                <span className="link-title">{item.title}</span>
                                                <span className="link-text">{item.text}</span>

                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="main-slide-footer">
                    <div className="main-slide-footer-con">
                        <Link>See how RhomboidBridge works</Link>

                        <div className="main-social-icons">

                            <Link>
                                <FaXTwitter />
                            </Link>
                            <Link>
                                <FaInstagram />
                            </Link>
                            <Link>
                                <FaFacebookF />
                            </Link>
                            <Link>
                                <FaLinkedinIn />
                            </Link>
                            


                        </div>
                    </div>
                </div>

            </div>

            

        </div>
    </div>
  )
});

export default MainDropdown