import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const getPageName = (path: string) => {
    switch (path) {
      case "/":
        return "Home";
      case "/wishlist":
        return "Wishlist";
      default:
        if (path.startsWith("/movie/")) return "Movie Details";
        return "Page";
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <h2>{getPageName(location.pathname)}</h2>
        <nav>
          <Link to="/wishlist">Wishlist</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
