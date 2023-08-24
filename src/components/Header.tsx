import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5">
      <div>
        <h1 className="font-bold text-lg">
          EISEN<span className="text-yellow">FLOW</span>
        </h1>
      </div>
      <div className="flex items-center">
        <button className="p-2 mr-4">
          <IoMdMail size={20} />
        </button>
        <div className="flex items-center">
          <img
            alt="프로필 사진"
            src="/images/profile.jpeg"
            className="w-7 h-7 lg:w-8 lg:h-8 rounded-full mr-1 object-cover"
          />
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
