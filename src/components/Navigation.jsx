import { ethers } from "ethers";

const Navigation = ({ account, setAccount }) => {
  return (
    <nav>
      <div className="nav__brand">
        <h1>Dappazon</h1>
      </div>
      <input type="text" className="nav__search" />
      <button type="button" className="nav__connect">
        {account.slice(0, 6) + "..." + account.slice(38, 42)}
      </button>
      <ul className="nav__links">
        <li>
          <a href="#Clothing & Jewelry">Clothing & Jewelry</a>
        </li>
        <li>
          <a href="#Electronics & Gadgets">Electronics & Gadgets</a>
        </li>
        <li>
          <a href="#Toys and Gaming">Toys and Gaming</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
