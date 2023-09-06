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

  const websiteReg =
    /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold break-keep text-base">{title}</h3>
        <button type="button" onClick={toggleIsVisible}>
          {isVisible ? (
            <IoMdArrowDropup className="mt-0.5 text-xl" />
          ) : (
            <IoMdArrowDropdown className="mt-0.5 text-xl" />
          )}
        </button>
      </div>
      <div onTransitionEnd={handleTransitionEnd} className="overflow-hidden select-text">
        <p
          className={`transition-all leading-6 pt-2 ${
            !triggerAnimation
              ? "max-h-0 duration-[200ms] ease-out"
              : `max-h-screen duration-[300ms] ease-in`
          }`}
        >
          {content.split(/\r|\n|\r\n/).map((row, idx) =>
            websiteReg.test(row) ? (
              <a href={row} target="_blank" key={idx} rel="noreferrer">
                {row}
                <br />
              </a>
            ) : (
              <span className="text-darkgray text-base" key={idx}>
                {row}
                <br />
              </span>
            )
          )}
        </p>
      </div>
    </>
  );
};

export default Dropdown;
