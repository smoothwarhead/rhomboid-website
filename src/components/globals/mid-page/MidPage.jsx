import ActiveBtn from "../buttons/btns/ActiveBtn"



const MidPage = ({text}) => {


  return (
     <div className="mid-page">
        <h3>Technology built with your specialty in mind</h3>
        <span className="m-text">
         {text}
        </span>

        <div className="mid-page-btn">
          <ActiveBtn text="See who we serve" active={true} />
        </div>
      </div>
  )
}

export default MidPage