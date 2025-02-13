import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAdditem = (item) => {
        dispatch(addItem(item));  // Use the item from the list instead of hardcoding "pizza"
    };

    return (
        <div>
            {items.map((item) => (
                <div 
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <h3>{item.card.info.name}</h3>
                    </div>
                    <div className="w-3/12 p-4 relative">
                        <button 
                            className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                            onClick={() => handleAdditem(item)}
                        >
                            Add+
                        </button>
                        <img 
                            src={CDN_URL + item.card.info.imageId} 
                            alt={item.card.info.name}
                            className="w-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
