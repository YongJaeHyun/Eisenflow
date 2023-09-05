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
          <IoMdMail className="text-xl" />
        </button>
        <div className="flex items-center">
          <img
            alt="프로필 사진"
            src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
            className="w-8 h-8 rounded-full mr-1 object-cover"
          />
          <IoMdArrowDropdown className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
