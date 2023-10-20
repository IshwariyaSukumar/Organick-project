
import './banner.css';
import bannerHome from '../../images/bannerHome.png';

export const Banner = () => {
  return (
    <div className='mainBanner'>
      <div className='bannerContent'>
        <p className='bannerHeading'>100% Natural Food</p>
        <p className='bannerCaption'>Choose the best healthier way of life</p>
        <button>Explore Now</button>
      </div>
      <img src={bannerHome} className='bannerHome'/>
       
    </div>
  )
}
 export default Banner;