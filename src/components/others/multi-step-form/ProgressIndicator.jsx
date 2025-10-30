import React, { forwardRef } from 'react'

const ProgressIndicator = forwardRef(({step}, ref) => {
  return (
     <div className="progress-con">
            <div className="progress">
                {[1, 2, 3].map((num, i) => (
                <div
                    key={num}
                    className={`circle ${step === num ? "active" : ""}`}
                >
                    {num < step ? "✓" : num}
                </div>
                ))}
            </div>
    
          </div>
  )
})

export default ProgressIndicator