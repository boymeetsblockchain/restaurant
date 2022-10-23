import banner from "../data/banner.png"
import "./Banner.css"

const Banner = () => {
  return (
      <div className="banner">
          <div className="banner-items">
              <p>Get special discount</p>
              <h2>up to 85%</h2>
              <button>claim voucher</button>
          </div>
          <img className="banner-image" src={banner} alt="banner" />
      </div>
  )
}

export default Banner