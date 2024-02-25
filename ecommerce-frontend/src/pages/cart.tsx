import { useEffect, useState } from "react";
import {VscError} from 'react-icons/vsc'
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
const cartItems=[
  {
    productId:'gt',
    photo:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360',
    name:"Macbook",
    price:2000,
    stock:10,
    quantity:4
  }, {
    productId:'gt',
    photo:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360',   
    name:"Macbook",
    price:2000,
    stock:10,
    quantity:4
  }
];
const subtotal=1000;
const tax=Math.round(subtotal *0.18)
const shippingCharge=200;
const discount=400;
const total=subtotal + shippingCharge+tax;
const Cart = () => {

  const [couponCode,setCouponCode]=useState<string>("");
  const [isValidCouponCode,setisValidCouponCode]=useState<boolean>(false);
 
  useEffect(()=>{

    const timeOutId=setTimeout(()=>{
      if (Math.random()>0.5 ) setisValidCouponCode(true)
      else setisValidCouponCode(false)

    },1000);

    return ()=>{
      clearTimeout(timeOutId);
      setisValidCouponCode(false);

    }
  },[couponCode])
 
 
 
 
  return (
    <div className="cart">
      <main>{
       cartItems.length > 0 ?  
         ( cartItems.map((i,index)=>
            <CartItem key={index} cartItem={i}/>
          )):(
            <h1>NO ITEMS ADDED</h1>
          )
        }
        



        </main>
        <aside>
          <p>Subtotal: ₹{subtotal}</p>
          <p>Shipping Charge: ₹{shippingCharge}</p>
          <p>Tax: ₹{tax}</p>
          <p>
            Discount:<em>-₹{discount}</em>
          </p>
          <p>
            <b>Total:₹{total}</b>
          </p>
          <input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="Coupon Code"/>
          
          {couponCode &&(
                          isValidCouponCode?
             (<span className="green">₹{discount} off using the <code>{couponCode}</code></span>)
             :(
            <span className="red">Invalid Coupon<VscError/>
             </span>
             )
             
          )}

          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
          
          
          </aside>
    </div>
  )
}

export default Cart