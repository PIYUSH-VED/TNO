import {React,useEffect} from 'react'
import { Plus, Minus, Trash2 } from "lucide-react";

const Cart = ({ cartItem,setCartItem}) => {
  const total = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
const discount = (total * 0.03).toFixed(2);
const tax = (total * 0.18).toFixed(2);
const subTotal = (total - parseInt(discount) + parseInt(tax)).toFixed(2);

    const removeitem = (item) =>{
        setCartItem(cartItem.filter((item1)=> !(item1.id === item.id && item1.category === item.category)))
      }
      const incquantity = (item) =>{
        setCartItem(cartItem.map((item1)=> (item1.id === item.id && item1.category === item.category) ? {...item1,quantity:item1.quantity + 1} : item1))
      }
      const decquantity = (item) =>{
        if(item.quantity > 1){
          setCartItem(cartItem.map((item1)=> (item1.id === item.id && item1.category === item.category) ? {...item1,quantity:item1.quantity - 1}:item1))

        }else{
          setCartItem(cartItem.filter((item1)=> !(item1.id === item.id && item1.category === item.category)))
        }
    }
  return (
    <>
    <div className=" overflow-hidden h-screen flex flex-col md:flex-row  gap-2 justify-center items-center">
        <div className='m-auto md:m-10 mt-5 pt-7 pb-6 flex flex-col overflow-y-scroll gap-4 shadow-md w-4/5 h-4/5 border-2 border-gray-200' style={{maxHeight:"100vh",scrollbarWidth:"none"}} >
    {cartItem.length === 0 ? ( 
    <div className='flex justify-center items-center '><h1 className='text-4xl '>Your Cart is empty</h1></div>
 ) : (
     cartItem.map((item) => (
          <div className="menu-item flex flex-row bg-white border-amber-50  md:w-11/12 h-[125px] shadow-2xl mr-2.5 ml-1 border-b-2 items-center" key={item.id}>
            <div className=" h-30 w-50 flex p-2">
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className='flex flex-col justify-between w-full h-full p-2'>
              <h5 className=''>{item.name}</h5>
              <h6>₹{item.price * item.quantity }</h6>
              <h5>{item.quantity}</h5>
              <div className='flex items-center gap-2 flex-row'>
              <button className='text-[30px]' onClick={()=> incquantity(item)}> +</button>
              <button className='text-[30px]' onClick={()=> decquantity(item)}> -</button>
              <button className='' onClick={() => removeitem(item)}> <Trash2 /> </button>
              </div>
            </div>
          </div>
        ))
    )}
      </div>
      <div className='m-auto md:m-10 mt-5 pt-7 pb-6 flex flex-col shadow-2xl overflow-y-scroll gap-4 w-4/5 md:w-2/5 lg:w-2/5 xl:w-2/5 p-2 h-4/5 border-2 border-gray-200' style={{maxHeight:"100vh",scrollbarWidth:"none"}}>
        <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>Bill</h1>
        <div className='flex flex-row justify-between items-center gap-10 w-full left-0'>
            <span>Total:</span>
            <span>₹{total}</span>
        </div>
        <div className='flex flex-row justify-between items-center gap-10 w-full'>
            <span>Discount(3%):</span>
            <span>₹{discount}</span>
        </div>
        <div className='flex flex-row justify-between items-center gap-10 w-full'>
            <span>Tax(18%):</span>
            <span>₹{tax}</span>
        </div>
        <div className='flex flex-row justify-between items-center gap-10 w-full border-t-1 pt-4'>
            <span>Sub Total:</span>
            <span>₹{subTotal}</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cart