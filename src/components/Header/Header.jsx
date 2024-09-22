import './Header.css';

export const Header = () => {
  return (
    <header className="bakery-banner">
      <nav className="navbar">
        <div className="titulo">Bakery</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Bakers</a>
          </li>
        </ul>
      </nav>
      <div className="bakery-content">
        <h1>LET'S TASTE PERFECTION</h1>
        <a href="#" className="buttom">
          Order Now
        </a>
      </div>
    </header>
  );
};

/*const Header = () => {
  return (
    <header className="bakery-banner">
      <nav className="navbar">
        <div className="titulo">Bakery</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Bakers</a></li>
        </ul>
      </nav>
      <div className="bakery-content">
        <h1>LET'S TASTE PERFECTION</h1>
        <a href="#" className="buttom">Order Now</a>
      </div>
    </header>
  );
};*/

/*export default Header;*/
