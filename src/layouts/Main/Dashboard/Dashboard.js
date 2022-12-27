import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingBag,
  MdPersonAddAlt,
} from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10 pt-20">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden fixed left-5 top-5 cursor-pointer text-2xl bg-white border p-1"
        >
          <HiOutlineMenuAlt1 />
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-auto h-auto bg-white text-base-content absolute lg:static top-2/4 -translate-y-2/4 lg:translate-y-0 flex flex-col justify-center rounded-r-lg space-y-3">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">
              <MdOutlineShoppingBag /> Products List
            </Link>
          </li>
          <li>
            <Link>
              <FaUserTag /> Customer List
            </Link>
          </li>
          <li>
            <Link to="addproduct">
              <MdOutlineAddShoppingCart /> Add Product
            </Link>
          </li>
          <li>
            <Link>
              <MdPersonAddAlt /> Add Customer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
