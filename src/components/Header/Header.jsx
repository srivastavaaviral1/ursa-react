import './Header.css';

function Header() {
  return (
    <nav className='nav'>
        <div className="logo">Spiderman</div>
         <ul>
            <li><a>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Know More</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </nav>
  );
}

export default Header;