import PleyerCard from "./PleyerCard";
import "../style/cardConteiner.css"
import { useState } from "react"
import {data} from "../helper/data"

const CardContainer = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
      
      setSearch(e.target.value)
    }

    return (
        <div>
                    <input onChange={handleChange} type="text" className="form-control w-25 mx-auto text-capitalize  fs-4" placeholder="Search Player"/>
      
        <div className="container mt-5  mx-auto  justify-content-center row g-2">
    

{data.filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            ).map((item, i)=>{
const {name,img , statistics} = item
return(
    <div className="colum col-12 col-md-6 col-lg-4 col-xl-3 mx-auto" key={i}>
        <PleyerCard  name={name} img={img} statistics={statistics} />
    </div>
)

})}

        </div>
        </div>
    );
};

export default CardContainer;
