import circleIcon from '../../images/circleIcon.png';
import chooseUs from '../../images/chooseUs.jpg';
import '../../components/chooseUsAbout/chooseUsAbout.css';
import returnPurchase from '../../images/returnPurchase.png';
import cardSecurity from '../../images/cardSecurity.png';
import phoneTime from '../../images/phoneTime.png';
import naturalFood from '../../images/naturalFood.png'

export const ChooseUsAbout = () => {
  return (
    <div className='chooseUsAbout'>

        <div className='chooseUs'>

        <div className='chooseUsAboutContent'>
           <h4 className='chooseUsAboutHead'>Why Choose us?</h4>
           <h3 className='chooseUsSubHead'>We do not buy from the open market & traders.</h3>
           <p className='chooseUsAboutPara1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
           <div className='naturalProduct'>
            <img src={circleIcon} className='circleIcon'/>
            <p className='naturalProductCaption'>100% Natural Product</p>
           </div>
           <p className='chooseUsAboutPara2'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
           <div className='resistance'>
            <img src={circleIcon} className='circleIcon'/>
            <p className='resistanceCaption'>Increases resistance</p>
           </div>
           <p className='chooseUsAboutPara3'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
        </div>

        <div>
            <img src={chooseUs} className='chooseUsImg'/>
        </div>

        </div>

        <div className='chooseUsCards'>
           <div className='return'>
             <img src={returnPurchase} className='returnIcon'/>
             <h4>Return Policy</h4>
             <p>Simply dummy text of the printintypesetting industry.</p>
           </div>

           <div className='fresh'>
            <img src={naturalFood} className='naturalFoodIcon'/>
            <h4>100% Fresh</h4>
             <p>Simply dummy text of the printintypesetting industry.</p>
           </div>

           <div className='support'>
             <img src={phoneTime} className='phoneIcon'/>
             <h4>Support 24/7</h4>
             <p>Simply dummy text of the printintypesetting industry.</p>
           </div>

           <div className='security'>
            <img src={cardSecurity} className='securityCardIcon'/>
            <h4>Return Policy</h4>
             <p>Simply dummy text of the printintypesetting industry.</p>
           </div>
        </div>
    </div>
  )
}
