import { ShoppingCart } from 'lucide-react';
const CartIcon = ({cartItems, handleClick}) => {
  const toggleCartBar = () => {

  }
  return (

    <div className='flex border' onClick={() => handleClick((prev) => !prev)}>
      <div>
        <ShoppingCart/>
      </div>

      <div className=' text-center pl-[1px] text-sm w-[20px] relative top-1'>
        {cartItems}
      </div>
    </div>
  )
}

export default CartIcon
