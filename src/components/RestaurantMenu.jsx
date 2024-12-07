import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ShimmerPostList } from "react-shimmer-effects";
import { cdn, cdn2 } from "../utils/constraints";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams()

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(0);

  if(resInfo === null) return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
  // Guard against undefined data structure
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "N/A";
  const cloudinaryImageId = resInfo?.cards?.[2]?.card?.card?.info?.cloudinaryImageId || "";
  
  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
  // console.log(categories)
const {itemCards=[]} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;

if (itemCards) {
  // console.log('itemCards:', itemCards);
} else {
  console.warn('itemCards is undefined. Check the data structure.');
}


  return !resInfo ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
  ) : (
    <div className="flex flex-col w-1/2 mx-auto">
      <div className="bg-zinc-200 w-[45vh] text-center mx-auto">
     <h1 className="text-2xl font-black">{name}</h1>
     <p>Cuisines: {cuisines.join(", ")}</p>
     <p>Cost for Two: {costForTwoMessage}</p>
     <img className="w-[40vh] rounded-md mx-auto" src={cdn+cloudinaryImageId
} alt="" />
      </div>     
    {
      categories.map((c,i)=>(<RestaurantCategory showItems={i===showIndex ? true: false} key={i} data={c?.card?.card} setShowIndex={()=>setShowIndex(i)}/>))
    }
    </div>
  );
};

export default RestaurantMenu;
