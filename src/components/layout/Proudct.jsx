import { addToCart, calculatePrice} from "@/storeSlices/cartSlice";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Proudct = () => {
  const [loading, setLoading] = useState(true);
  let  [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data.map( e => ( {...e, quantity : 1})))
        setLoading(!loading);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const dispatch = useDispatch()
  const addToCartItem = (product) => {
    dispatch(addToCart(product))
    dispatch(calculatePrice())
    toast.success("added to cart")
    // toast('Added to cart!', {
    //        status: 'success',
    //      position: 'top-center',
    //        icon: '',
    //        duration: 1500,
    //      });
  }
 

  return (
    <>
    { loading ? "loading" : <>
    
    
    <nav className=" flex flex-wrap gap-8 items-center justify-center m-10">

      { product.map((product, key= product.id) => {
        
        return  <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-64 p-4  h-68 flex flex-col items-center justify-center aspect-[2/3]" key={key}>
          <Link>
            <img
              src={product.image}
              className="w-32 hover:scale-105 aspect-square object-cover"
              />
          </Link>
          <div className="px-6 py-4">
            <h3 className="text-base font-medium text-gray-700 mb-2 line-clamp-2">{product.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-gray-700 mr-2">
                {product.price}
              </span>
              <button onClick={() => addToCartItem(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>;
      })}
        </nav>
        </>}
    </>
  );
};


export default Proudct;
