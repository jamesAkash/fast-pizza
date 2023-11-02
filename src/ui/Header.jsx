import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast Pizza co.</Link>
      <SearchOrder />
      <p>John</p>
    </header>
  );
};

export default Header;
