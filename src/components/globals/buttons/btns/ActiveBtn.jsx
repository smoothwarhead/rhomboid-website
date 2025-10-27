

const ActiveBtn = (props) => {
    const { text, active } = props;
  return (
    <div className={`btn ${active ? "active-btn" : ""}`}>
        {text}
    </div>
  )
}

export default ActiveBtn