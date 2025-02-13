import { useSelector } from "react-redux"
import ItemList from "./itemlist";


const Cart = () => {
    const cartitms = useSelector((store) => store.cart.items);
    console.log(cartitms);
    

    return ( <div className="text-center m-4 p-4">
        <h1 className="text-2xl" font-bold>Cart</h1>
        <div className="m-6/12 m-auto">
        <ItemList items={cartitms} />
        <button className="p-2 m-2 bg-black text-white" 
        onClick={handleClearCart}> clearCart</button>
        </div>
    </div>
    
    );
};

export default Cart;


