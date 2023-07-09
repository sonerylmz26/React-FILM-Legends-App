import { useState } from "react"

import Card from 'react-bootstrap/Card';



const PleyerCard = ({name, img,  statistics }) => {
const [isshow , setIsShow] = useState(true)
const handleShow = () => {
setIsShow(!isshow)


}

  return (

<div >

<Card className="cards" onClick={handleShow} style={{ width: '18rem', height:"24rem" }}>


  {
isshow ? (
<div>
  <Card.Img className="img" variant="top" style={{height:"20rem"}} src={img} />
<Card.Title>{name}</Card.Title>
</div>

       
    
  
) : (
  <>
  

<ul class="m-auto  p-2 rounded-2" style={{height:"24rem", width:"18rem"}}>

  <div className="mt-5">
  <Card.Title className="text-white">{name}</Card.Title>

{
  statistics.map((item) =>{

return(

  <li class="h5 text-start list-unstyled  mx-auto mt-3 p-2" >📽️ {item}</li>
 

    
)



  })

}

  </div>


</ul>

</>
)

  }
    
    </Card>  
</div>



 
  )
}

export default PleyerCard