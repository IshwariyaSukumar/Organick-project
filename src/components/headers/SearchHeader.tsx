import './searchHeader.css';
import searchIcon from '../../images/searchIcon.png'

export const SearchHeader = () => {
  return (
    <div className='searchHeader'>
       <input className='search'></input>
       <img src={searchIcon} className='searchIcon'/>
    </div>
  )
}
