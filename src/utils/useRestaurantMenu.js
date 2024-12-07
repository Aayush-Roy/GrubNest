import React, { useEffect, useState } from "react";

const useRestaurantMenu =(resId)=>{
    const[resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
        const fetchData = async () => {
            try {
              const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
              );
              const json = await data.json();
              // console.log(json); // Check the structure here
              setResInfo(json.data || null); // Set to null if no data
            } catch (error) {
              console.error("Error fetching menu:", error);
            }
          };
          return resInfo;
}
export default useRestaurantMenu;