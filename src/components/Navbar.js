import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

export const Navbar = () => {
const { ammount } = useSelector((store) => store.cart);
  return (
    <nav>
        <div className='nav-center'>
            <h3>redux toolkit</h3>
            <div className="nav-container">
                <CartIcon />
                 <p className='total-ammount'>{ammount}</p>
            </div>
        </div>
    </nav>
  )
}
