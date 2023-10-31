import '../../components/aboutUsAbout/aboutUsAbout.css';
import healthyBowl from '../../images/healthyBowl.png';
import Tractor from '../../images/tractor.png';
import chemicalPlant from '../../images/chemicalPlant.png';
import cherries from '../../images/cherries.png';


export const AboutUsAbout = () => {
  return (
    <div className='aboutUsAbout'>
      <img src={healthyBowl} className='healthyBowlAbout'/>
      <div className='aboutUsAboutContent'>
        <h4 className='aboutUsAboutHead'>About Us</h4>
        <h3 className='aboutUsAboutSubHead'>We do Creative Things for Success</h3>
        <p className='aboutUsAboutPara1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <p className='aboutUsAboutPara2'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className='iconWithCaption'>
        <div className='tractor'>
        <img src={Tractor} className='tractorIcon'/>
        <h5 className='tractorCaption'>Modern Agriculture Equipment</h5>
        </div>
        <div className='chemicalPlant'>
        <img src={chemicalPlant} className='chemicalPlantIcon'/>
        <h5 className='chemicalPlantCaption'>No growth hormones are used</h5>
        </div>
        </div>
        <button className='exploreBtn'>Explore Now</button>
      </div>
    </div>
  )
}
