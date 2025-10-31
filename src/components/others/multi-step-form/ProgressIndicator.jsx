import React, { forwardRef } from 'react'
import { FaCheck } from 'react-icons/fa6'

const ProgressIndicator = ({step }) => {

    // console.log(isStep1Valid, isStep2Valid, isStep3Valid)


  return (
     <div className="progress-con">
            <div className="progress">
                {[1, 2, 3].map((num, i) => (
                <div
                    key={num}
                    className={`circle ${step === num ? "active" : ""}`}
                    // ref={ref}
                >

                    {num < step ? 
                        <span className='num-icon'><FaCheck /></span>
                         : 
                       <span>{num}</span> 
                    }
                </div>
                ))}
            </div>
    
          </div>
  )
}

export default ProgressIndicator