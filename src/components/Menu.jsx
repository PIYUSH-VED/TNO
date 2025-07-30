import React from "react";
import Cart from "../app.json";
const Menu = ({ cartItem, setCartItem }) => {
  const addtoCart = (item) =>{
    console.log("Cart before adding item:", cartItem);
    // Check if the item already exists in the cart
    const exisistingitem = cartItem.find((item1)=> item1.id === item.id && item1.category === item.category);
    if(exisistingitem){
      setCartItem(cartItem.map((item1)=> item1.id === item.id && item1.category === item.category ? {...exisistingitem, quantity: exisistingitem.quantity + 1} : item1));
    }else{
      setCartItem([...cartItem,item])
    }
    console.log("Cart after adding item:", cartItem);
  }
  return (
    <>
      <div className="menu justify-center items-center pt-11 flex flex-wrap gap-4">

        {Cart.map((item) => (
          <div className="menu-item flex flex-col justify-between w-[300px] h-[400px] shadow-2xl border-2 border-white rounded-lg p-1 ">
            <div className="bg-amber-500 h-3/6">
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 border-2 border-white rounded-lg p-2 flex flex-col ">
              <h6 className="text-blue-700">₹{item.price}</h6>
              <h5>{item.name}</h5>
              {/* <p>{item.category}</p> */}
              <div className="mt-auto">
              <button className=" bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 active:bg-green-700 transition duration-200" onClick={()=>addtoCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default Menu;
