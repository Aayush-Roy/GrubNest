import React, { useEffect, useState, useContext } from 'react'; 
import RestaurantCards,{withPromotedLabel} from './RestaurantCards';
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
// import User from './User';
function Body() {
    const [restaurantCard, setReastaurantCard] = useState([]);
    const [searchText,setSearchtext] = useState("");
    const [original,setoriginal] = useState([]);
    const RestaurantWithLabel = withPromotedLabel(RestaurantCards)
    const{setuser,loggedUser} = useContext(UserContext);
    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            const restaurants = json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (!restaurants) {
                throw new Error("Invalid data structure from API");
            }
            setReastaurantCard(restaurants);
            setoriginal(restaurants);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>Looks like you are offline, please check your internet connection</h1>
    // console.log(restaurantCard)
    return restaurantCard ? (
        <>
        <div className='flex justify-between px-28 my-5'>
        <button 
       onClick={()=>{
        const filterData = restaurantCard.filter(p=> p.info.avgRating > 4.3);
        // console.log(filterData);
        setReastaurantCard(filterData);
       }}
        className='px-10 py-1 bg-orange-400 text-white rounded-md '>filter foods</button>
        <div className='w-1/2 '>
            <input onChange={(e)=>{setSearchtext(e.target.value)
            
            }} className='w-1/2 border-[1px] border-zinc-300 px-2 py-[2px]' type="text" name="" value={searchText} id="" />
            <button 
            onClick={()=>{
                const filterData = original.filter(p=> p.info.name.toLowerCase().includes(searchText.toLowerCase()));
                // console.log(filterData);
                setReastaurantCard(filterData);
            }}
                
            className='px-8 py-1 rounded-md bg-orange-400 text-white'>search</button>
            <input type="text" value={loggedUser} onChange={(e)=>setuser(e.target.value )} name="" className='p-2 border-2 border-black' id="" />
        </div>
        </div>
        
        <div  className='flex flex-wrap justify-center gap-8 px-10 items-center'>
            {restaurantCard &&  restaurantCard.map((restaurant, index) => (
                
               <Link to={`/restaurants/${restaurant.info.id}`}>
                {restaurant.info.avgRating >4.3 ? <RestaurantWithLabel info={restaurant.info}/> : <RestaurantCards key={index} info={restaurant.info} />}
                 
                 </Link>
            ))}
        </div>
        </>
    ):<ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30}  />;
}

export default Body;
