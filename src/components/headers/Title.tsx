import './header.css';
import './title.css';
import organickLogo from '../../images/organickLogo.png'

export const Title = () => {
  return (
    <div className='titleDiv'>
        <img src={organickLogo} className='mainLogo'></img>
        <h3 className='title'>Organick</h3>
        
    </div>
  )
}

export default Title;