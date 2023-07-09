
import logo from "../assets/3.png" 
import "../style/header.css"


const Header = () => {



  return (

  
    <div className="mt-1">
      {/* {data.filter((player) =>
        player.name.toLowerCase().includes(search.trim().toLowerCase())
      )} */}
<img src={logo} alt="film" className="logo " />
<h1 className="mb-5 text-light">Film Legends </h1>

    </div>
  )
}

export default Header