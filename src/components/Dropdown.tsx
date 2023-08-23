import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useAnimation from "../hooks/useAnimation";

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [handleTransitionEnd, triggerAnimation] = useAnimation(isVisible);

  const toggleIsVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button type="button" className="flex justify-between" onClick={toggleIsVisible}>
        <h3 className="font-semibold truncate">Send over wireframes</h3>
        {isVisible ? (
          <IoMdArrowDropup size={22} className="mt-0.5" />
        ) : (
          <IoMdArrowDropdown size={22} className="mt-0.5" />
        )}
      </button>
      <div onTransitionEnd={handleTransitionEnd} className="overflow-hidden">
        <div
          className={`transition-all   ${
            !triggerAnimation
              ? "max-h-0 duration-[300ms] ease-out"
              : `max-h-screen duration-[300ms] ease-in`
          }`}
        >
          123ㅈㄷㄹㅈㅁㄹㄷㅈㄹㅈㅁㄹㄷㅈㅁㄹㅁㄷㅈㄹㄷㅈㄹㅎㅁㄷ죠ㅑㅕㄹㅎㅈ묘ㅕㅑㅎ래요ㅕㅑㅈㅎㄹ죠ㅕㅐㄹㅎㅈㅎ
        </div>
      </div>
    </>
  );
};

export default Dropdown;
