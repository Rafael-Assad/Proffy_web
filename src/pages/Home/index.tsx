import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.png'

const Home = () => {
  return (
    <div id="home-page">
      <div id="home-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="" />
          <img src={landingImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home