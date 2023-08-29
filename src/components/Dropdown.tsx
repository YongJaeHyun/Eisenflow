import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useAnimation from "../hooks/useAnimation";

interface IDropdown {
  title: string;
  content: string;
}

const Dropdown = ({ title, content }: IDropdown) => {
  const [isVisible, setIsVisible] = useState(false);
  const [handleTransitionEnd, triggerAnimation] = useAnimation(isVisible);

  const toggleIsVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold break-keep">{title}</h3>
        <button type="button" onClick={toggleIsVisible}>
          {isVisible ? (
            <IoMdArrowDropup size={20} className="mt-0.5" />
          ) : (
            <IoMdArrowDropdown size={20} className="mt-0.5" />
          )}
        </button>
      </div>
      <div onTransitionEnd={handleTransitionEnd} className="overflow-hidden">
        <p
          className={`transition-all text-darkgray leading-5 pt-2 ${
            !triggerAnimation
              ? "max-h-0 duration-[200ms] ease-out"
              : `max-h-screen duration-[300ms] ease-in`
          }`}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Dropdown;
