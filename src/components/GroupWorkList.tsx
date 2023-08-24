import { IconType } from "react-icons";
import { BsPlus } from "react-icons/bs";
import GroupWorkListCard from "./GroupWorkListCard";
import { ICardData, currentAddGroupIdx, isModalVisible } from "../atoms";
import { useSetRecoilState } from "recoil";
import { Droppable } from "react-beautiful-dnd";

interface IGroupWorkList {
  Icon: IconType;
  groupName: string;
  groupIdx: string;
  workList: ICardData[];
}

const GroupWorkList = ({ Icon, groupName, groupIdx, workList }: IGroupWorkList) => {
  const setIsVisible = useSetRecoilState(isModalVisible);
  const setCurrentAddIdx = useSetRecoilState(currentAddGroupIdx);

  const showModal = () => {
    setIsVisible(true);
    setCurrentAddIdx(parseInt(groupIdx));
  };

  return (
    <Droppable droppableId={groupIdx}>
      {(provided) => (
        <div
          className="w-full lg:w-[22%]"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center px-5 py-3">
            <Icon />
            <h2 className="font-semibold">{groupName}</h2>
          </div>
          <div className="bg-white shadow-lg relative">
            <button
              type="button"
              className={`w-8 h-8 rounded-full flex justify-center items-center absolute z-20 ${
                workList.length
                  ? "-top-4 -right-4"
                  : "top-[3rem] -translate-y-1/2 right-1/2 translate-x-1/2 "
              } bg-yellow`}
              onClick={showModal}
            >
              <BsPlus size={24} className="text-white" />
            </button>
            {workList.length ? (
              workList.map((cardData, idx) => (
                <GroupWorkListCard key={idx} cardData={cardData} idx={idx} />
              ))
            ) : (
              <div className="w-full h-24 bg-white shadow-lg absolute"></div>
            )}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default GroupWorkList;
