import {data} from "../helper/data"

const PleyerCard = () => {
  return (
    <div className="row">
{data.map((items, i) => {
console.log(items)
const {name, img,  statistics } = items
console.log(statistics)
return(
      <div className="col col-sm-6 col-md-4 col-lg-3 ">
 <div className="card" style={{ width: "18rem" }}>
  <img src={img} className="card-img-top" alt="..." style={{ width: "18rem", height : "20rem" }} />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
  </div>
</div>

      </div>
)
})}


    </div>
  )
}

export default PleyerCard