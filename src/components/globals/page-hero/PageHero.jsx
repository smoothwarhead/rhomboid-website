import React from 'react'
import ActiveBtn from '../buttons/btns/ActiveBtn'

const PageHero = (props) => {

    const { btnText, p, h2, span } = props
  return (
    <section className="hero">
        <div className="hero-left">
            <p>{p}</p>

            <h2>
              {h2}
            </h2>

            <span>{span}</span>

            <ActiveBtn
                text={btnText}
                active={true}
            />

        </div>
        <div className="hero-right">

          <span>
            <div className="dot"></div>
            <p>New to EHRs</p>
          </span>

          <span>
            <div className="dot"></div>
            <p>Switching EHRs</p>
          </span>
          
        </div>

    </section>
  )
}

export default PageHero