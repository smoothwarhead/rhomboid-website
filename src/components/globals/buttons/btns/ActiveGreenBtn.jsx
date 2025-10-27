import '../../../../styles/index.scss';

const ActiveGreenBtn = (props) => {
    const { text, active, cName } = props;

  return (
     <div className={`btn ${active ? "active-green-btn" : ""} ${cName}`}>
        {text}
    </div>
  )
}

export default ActiveGreenBtn