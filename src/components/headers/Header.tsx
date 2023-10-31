
import {Title} from './Title';
import {Menu} from './Menu';
import { SearchHeader } from './SearchHeader';
import { Cart } from './Cart';

export const Header = () => {
  return (
    <div className='header'>
      <Title/>
      <Menu/>
      <SearchHeader/>
      <Cart/>
    </div>
  )
}

export default Header;