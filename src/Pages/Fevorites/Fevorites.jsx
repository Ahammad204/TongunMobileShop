import { useEffect, useState } from "react";

import FevoritesCard from "./FevoritesCard";


const Fevorites = () => {

    const [favourites,setFavourites] = useState([]);
    const [noFound,setNoFound] = useState(false)
    const [isShow,setIsShow] = useState(false)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
       if(favoriteItems){

        setFavourites(favoriteItems);

        const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price, 0)
        setTotalPrice(total)


       }
       else{

      
        setNoFound('No Data Found')
        

       }

    },[])

    const handleRemove = () => {

        localStorage.clear()
        setFavourites([])
        setNoFound('No Data Found')

    }

    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>:<div>

                {favourites.length > 0 && 
                
                <div>
                    <button onClick={handleRemove} className="px-5 bg-green-200 mx-auto block">Delete All Favourites</button>
                    <h1>TotalPrice: ${totalPrice}</h1>
                </div>
                
                
                }
                
                <div className="grid grid-cols-2 gap-5">

                {

                    isShow ?  favourites.map(phone => <FevoritesCard key={phone.id} phone={phone}></FevoritesCard >):
                    favourites.slice(0,4).map(phone => <FevoritesCard key={phone.id} phone={phone}></FevoritesCard >)

                   

                }

                </div>
                {favourites.length > 4 && <button onClick={()=> setIsShow(!isShow)}  className="px-5 bg-green-200 mx-auto block mt-3">{isShow ? "Show Less": "Show More"}</button>}

                </div>}
        </div>
    );
};

export default Fevorites;