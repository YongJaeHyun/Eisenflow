import { useState } from "react";
import { IconType } from "react-icons";
import { BsPlus } from "react-icons/bs";
import GroupWorkListCard from "./GroupWorkListCard";

interface IGroupWorkList {
  Icon: IconType;
  groupName: string;
}

const GroupWorkList = ({ Icon, groupName }: IGroupWorkList) => {
  const [workList, setWorkList] = useState([1, 2]);

  return (
    <div className="w-full">
      <div className="flex px-5 py-3">
        <Icon />
        <h2 className="font-semibold">{groupName}</h2>
      </div>
      <div className="bg-white min-h-[8rem] shadow-lg relative">
        <button
          type="button"
          className={`w-8 h-8 rounded-full flex justify-center items-center absolute z-20 ${
            workList.length
              ? "-top-4 -right-4"
              : "top-[4rem] -translate-y-1/2 right-1/2 translate-x-1/2 "
          } bg-yellow`}
        >
          <BsPlus size={24} className="text-white" />
        </button>
        {workList?.map((_, idx) => (
          <GroupWorkListCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default GroupWorkList;
