
import { Link } from 'react-router'

const LinkBtn = (props) => {
    const { to, cName, text } = props;

  return (
    <div className='link-btn'>
        <Link
            to={to}
            className={cName}
        >
            {text}
        </Link>

    </div>
  )
}

export default LinkBtn;