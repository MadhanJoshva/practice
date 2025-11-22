import { useDispatch ,useSelector } from "react-redux";
import { removeCart,incrementCart,decrementCart } from "../cart/cartSlice";

function Cart(){
    const { cartItem } = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    const total = cartItem.reduce((acc,item)=>acc+item.price * item.qty ,0);

    return (
        <>
        <div className="flex flex-col gap-10 justify-start items-center ">
             <h1 className="px-10 text-green-600">cart Item</h1>
        {cartItem.map(prod=>(
            <div className="flex flex-row flex- py-10 px-5 rounded-lg shadow-lg bg-gray-300 hover:bg-gray-600 transform transition duration-300 hover:scale-105" key={prod.id}>
                <h1 className="pr-3">{prod.name}</h1>
                <p className="pr-3">₹{prod.price} x {prod.qty}</p>
                <button onClick={()=>dispatch(incrementCart({id:prod.id}))} className="pr-3">+</button>
                <button onClick={()=>dispatch(decrementCart({id:prod.id}))} className="pr-3">-</button>
                <button onClick={()=>dispatch(removeCart({id:prod.id}))}>remove</button>
                 <p>{total}</p>  
            </div>
        ))}
       
        </div>
      
        </>
    )
}

export default Cart;