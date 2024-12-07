import { useDispatch } from "react-redux";
import { cdn } from "../utils/constraints";
import { addItem } from "../utils/cartSlice";
const ItemList =({items})=>{
    // console.log(items.card.info.name)  
    const dispatch = useDispatch();
    const handleAddItem =(item)=>{
        dispatch(addItem(item));
    }
    return <div>
        {items && items.map(item=>(
            <div className="border-b-4 mb-3 p-2 flex border-black justify-between" key={item.card.info.id}>
                <div>
                    <span className="font-semibold">{item.card.info.name}</span>
                    <p className="font-bold">Rs.{item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</p>
                    <p className="text-sm text-zinc-600 w-[70%]">
                {item.card.info.description}
                </p>
                </div>
                <div className="w-20 ">
                <img src={cdn+item.card.info.imageId} className=" w-full rounded-md" alt="" />
                <button 
                onClick={()=>handleAddItem(item)}
                className="rounded my-1 border-2 border-green-500 px-10 py-2 ">Add+</button>
                </div>
            </div>
        ))}
    </div>
}

export default ItemList;