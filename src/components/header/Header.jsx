import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="img">
        <img
          src="https://www.emarketexperts.com.au/wp-content/uploads/homelogonew.png"
          alt="..."
        />
        <label>Market</label>
      </div>

      <nav>
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/108px-Hamburger_icon.svg.png" alt="..." />
        </div>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">CATEGORIES</a>
          </li>
          <li>
            <a href="#">ORDERD</a>
          </li>
          <li>
            <a href="#">CARTED</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
