import { ShoppingCart } from 'lucide-react';
const CartIcon = () => {
  return (
    <div className='flex'>
      <div>
        <ShoppingCart/>
      </div>

      <div className=' text-center pl-1 text-sm relative top-1'>
        120
      </div>
    </div>
  )
}

export default CartIcon
