import "./Footer.css"
import { AiFillHome } from "react-icons/ai"
import { AiFillSetting } from "react-icons/ai"
import { MdFavorite } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-items">
            <Link to='/'>
                  <AiFillHome className="icon"/>
            </Link>
            <Link to='/settings'>
                  <AiFillSetting className="icon"/> 
            </Link>
            <Link to='/favorite'>
                  <MdFavorite className="icon"/>
            </Link>
              <Link to='/profile'>
                  <BsFillPersonFill className="icon"/>
            </Link>     
          </div>
    </div>
  )
}

export default Footer