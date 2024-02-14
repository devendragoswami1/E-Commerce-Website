import { calculatePrice, decrement, increment, removeFromCart } from "@/storeSlices/cartSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, subTotal, shippingCharges, tax, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-100 px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4">
                <div className="flex-shrink-0 w-16 h-16 mr-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <Link>
                    <h3 className="text-base font-medium text-gray-700 hover:text-indigo-500">
                      {item.title}
                    </h3>
                  </Link>
                  <div>{item.rating.rate}⭐</div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500 mr-2">
                      Quantity: {item.quantity}{" "}
                    </span>
                    <button
                      onClick={() => {
                        dispatch(decrement(item.id))
                       dispatch(calculatePrice())}}
                      className="rounded-full border border-gray-300 px-2 text-center">
                      -
                    </button>
                    <span className="px-2">total available</span>
                    <button
                      onClick={() =>{
                        dispatch(calculatePrice())
                        dispatch(increment(item.id))}
                      } 
                      className="rounded-full border border-gray-300 px-2 text-center">
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id))
                        toast.success("Item deleted successfully!")
                        dispatch(calculatePrice())
                      }}
                      className="ml-4 text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                  <span className="text-gray-500 mt-2">
                    Price: {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="flex flex-col p-6 max-w-96 bg-violet-200 rounded-2xl justify-center ">
            <div className="flex flex-col gap-3  tracking-widest font-semibold">
              <div className="flex  justify-between gap-6 "> <p>  SubTotal : </p> <span>{subTotal}</span></div>
              <div className="flex  justify-between gap-6 "> <p> Shipping Charges : </p> <span>{shippingCharges}</span></div>
              <div className="flex  justify-between gap-6 "> <p>     Tax : </p>   <span>{tax}</span></div>
              <div className="flex text-lg justify-between font-bold mt-2"><p>Total Amount : </p> <span >{total}</span> </div>
            </div>
            <div className="mt-6">
              <Link>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Checkout total
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

//   const totalPrice = .reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // Remove item from cart
//   const removeFromCart = (itemId) => {
//     setCartItems(.filter((item) => item.id !== itemId));
//   };

//   // Update item quantity
//   const updateQuantity = (itemId, quantity) => {
//     setCartItems(
//       .map((item) => (item.id === itemId ? { ...item, quantity } : item))
//     );
//   };

// return (
//   <div className="bg-gray-100 px-4 py-8">
//     <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//     {.length === 0 ? (
//       <p className="text-gray-500 text-center">Your cart is empty.</p>
//     ) : (
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {.map((item) => (
//           <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
//             <div className="flex-shrink-0 w-16 h-16 mr-4">
//               <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
//             </div>
//             <div className="flex flex-col">
//               <Link to={`/products/${item.id}`}>
//                 <h3 className="text-base font-medium text-gray-700 hover:text-indigo-500">{item.name}</h3>
//               </Link>
//               <div className="flex items-center mt-2">
//                 <span className="text-gray-500 mr-2">Quantity:</span>
//                 <button
//                   className="rounded-full border border-gray-300 px-2 text-center"
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   disabled={item.quantity === 1}
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   className="rounded-full border border-gray-300 px-2 text-center"
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                 >
//                   +
//                 </button>
//                 <button
//                   className="ml-4 text-red-500 hover:text-red-700"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//               <span className="text-gray-500 mt-2">Price: ${item.price.toFixed(2)}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     )}

//     {.length > 0 && (
//       <div className="mt-8 flex justify-end">
//         <Link to="/checkout">
//           <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
//             Checkout (${totalPrice.toFixed(2)})
//           </button>
//         </Link>
//       </div>
//     )}
//   </div>
//   );
// }

// export default CartComponent;
