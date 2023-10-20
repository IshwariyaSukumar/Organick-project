import ecofriendly from '../../images/ecofriendly.jpg'
import '../../components/ecofriendlyHome/ecofriendlyHome.css'

export const EcofriendlyHome = () => {
  return (
    <div className='ecofriendly'>
        <img  className='greenary' src={ecofriendly}/>   
        <div className='ecofriendlyContent'>
          <h4 className='ecofriendlyMainHead'>Eco friendly</h4>
          <h3 className='ecofriendlyHeading'>Econis is a Friendly Organic Store</h3>
          <h4 className='ecofriendlySubHead'>Start with Our Company First</h4>
          <h5 className='ecofriendlyPara1'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque 
            laudantium. Sed ut perspiciatis.</h5>
          <h4 className='ecofriendlySubHead'>Learn How to Grow Yourself</h4>
          <h5 className='ecofriendlyPara2'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque 
            laudantium. Sed ut perspiciatis.</h5>
            <h4 className='ecofriendlySubHead'>Farming Strategies of Today</h4>
            <h5 className='ecofriendlyPara3'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque 
            laudantium. Sed ut perspiciatis.</h5>
        </div>
    </div>
  )
}
