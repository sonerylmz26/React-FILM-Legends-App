import logo from "../assets/nba-logo.png" 


const Header = () => {
  return (
    <div className="mt-5">
<img src={logo} alt="" className="logo" />
<h1 className="mt-3 text-light">NBA Legends</h1>
    </div>
  )
}

export default Header