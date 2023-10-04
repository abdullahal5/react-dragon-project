import logo from '../../../../assets/logo.png'
import moment from "moment";
const Header = () => {
    return (
      <div className='mt-5'>
        <img className="mx-auto text-[#444]" src={logo} alt="" />
        <p className="text-xl text-[#706F6F] my-5 text-center">
          Journalism Without Fear or Favour
        </p>
        <p className="text-xl text-center">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    );
};

export default Header;