import CartItem from "./cartItem"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cartSlice"

const CartContainer = () => {
    const {cartItems,total,ammount} = useSelector((store) =>store.cart)
    const dispatch = useDispatch();
    if(ammount < 1){
        return <section className="cart">
            <header>
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }
  return (
    <section className="cart"> 
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
        <h4>
            total <span>${total}</span>
        </h4>
        </div>
        <button className='btn clear-btn' onClick={()=> {
          dispatch(clearCart())
        }}>Clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer