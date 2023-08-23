import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Dropdown from "./Dropdown";

const GroupWorkListCard = () => {
  const [rate, setRate] = useState(0);

  const changeRate = (rate: number) => setRate(rate);

  return (
    <div className="flex border-b">
      <div className="w-1/5 h-20 flex justify-center items-center">
        <button type="button" className="w-4 h-4 rounded-full border-2"></button>
      </div>
      <div className="w-4/5 pr-4 my-5">
        <div className="flex justify-between mb-1">
          <span className="text-sm">~3월 2일</span>
          <div className="flex items-center">
            {Array(5)
              .fill(null)
              .map((_, idx) =>
                rate >= idx ? (
                  <button key={idx} onClick={() => changeRate(idx)}>
                    <BsStarFill size={12} className={`text-yellow ${idx === 4 && "mr-1"}`} />
                  </button>
                ) : (
                  <button key={idx} onClick={() => changeRate(idx)}>
                    <BsStarFill
                      size={12}
                      className={`text-lightgray ${idx === 4 && "mr-1"}`}
                    />
                  </button>
                )
              )}
          </div>
        </div>
        <Dropdown />
      </div>
    </div>
  );
};

export default GroupWorkListCard;
