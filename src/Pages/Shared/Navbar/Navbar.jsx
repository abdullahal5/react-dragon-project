import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = <>
  <li><a href="">Item 1</a></li>
  <li><a href="">Item</a></li>
  
  </>

    return (
      <div className="grid grid-cols-3 justify-between my-5">
        <div className=""></div>
        <div className="col-span-1">
          <nav>
            <ul className="flex gap-10 justify-center text-[#706F6F]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end">
          <img className="w-10 mr-3" src="../../../../assets/user.png" alt="" />
          <Link to="/login">
            <button className="bg-[#403F3F] text-white px-8 py-2 mr-10">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;