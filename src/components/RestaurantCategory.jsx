import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // console.log(data)
    // const[check,setcheck] = useState(false);
    const handleclick = () => {
        setShowIndex();
    }
    return(
        <div>
        <div className="shadow-lg  w-full  mb-2  px-4 py-4 items-center bg-gray-200">
            <div className="cursor-pointer flex justify-between" onClick={handleclick}>
            <span className="block px-5 py-2  font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
            <div className="cursor-pointer"><IoIosArrowDown/></div>
            </div>
            <div className="h-full">
            {
                showItems && <ItemList items={data.itemCards}/>
            }
                
            </div>
        </div>
        
        </div>    )
}

export default RestaurantCategory;