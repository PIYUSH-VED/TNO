import {Link,useNavigate} from 'react-router-dom'
import { React,useState } from 'react';
import "../styles/Navbar.css"; // Assuming you have a CSS file for styling
// import {   } from "";
const Navbar = ({isOpen, setIsOpen}) => {
  const [activeSection, setActiveSection] = useState("");
  function togglemenu(){
    setIsOpen(!isOpen);
  }
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
    const el = document.getElementById(`${activeSection}`);
    if (el) el.scrollIntoView();
  }
  

  return (
    <>
    <nav>
      <div className="logo">T&O</div>
      <div className='hamburger' onClick={togglemenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <div className={`links ${isOpen ? "show" : ""}`} id="linkss">

      <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
       <div onClick={()=>{
         handleclick();
        setActiveSection("about");
        setIsOpen(false);
       }}>About</div>
      <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
       <div onClick={()=>{
         handleclick();
        setActiveSection("contact");
        setIsOpen(false);
       }}>Contact</div>
      <Link to="/reserve" onClick={() => setIsOpen(false)}>Reserve</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar