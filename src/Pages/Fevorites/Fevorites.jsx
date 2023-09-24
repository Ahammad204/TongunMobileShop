import { useEffect, useState } from "react";

import FevoritesCard from "./FevoritesCard";


const Fevorites = () => {

    const [favourites,setFavourites] = useState([]);
    const [noFound,setNoFound] = useState(false)

    useEffect(()=>{

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
       if(favoriteItems){

        setFavourites(favoriteItems);

       }
       else{

      
        setNoFound('No Data Found')
        

       }

    },[])


    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>:<div>
                
                <div className="grid grid-cols-2 gap-5">

                {

                    favourites.map(phone => <FevoritesCard key={phone.id} phone={phone}></FevoritesCard >)

                }

                </div>

                </div>}
        </div>
    );
};

export default Fevorites;