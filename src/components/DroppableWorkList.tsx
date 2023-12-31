import { IconType } from "react-icons";
import { BsPlus } from "react-icons/bs";
import DroppableWorkListCard from "./DroppableWorkListCard";
import { currentAddGroupIdx, modalState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { Droppable } from "react-beautiful-dnd";
import { ICardDetail } from "card";

interface IDroppableWorkList {
  Icon: IconType;
  categoryName: string;
  categoryIdx: string;
  workList: ICardDetail[];
}

const DroppableWorkList = ({
  Icon,
  categoryName,
  categoryIdx,
  workList,
}: IDroppableWorkList) => {
  const ASetModalState = useSetRecoilState(modalState);
  const ASetCurrentAddIdx = useSetRecoilState(currentAddGroupIdx);

  const showModal = () => {
    ASetModalState({ isVisible: true, type: "add" });
    ASetCurrentAddIdx(parseInt(categoryIdx));
  };
  return (
    <Droppable droppableId={categoryIdx}>
      {(provided) => (
        <div
          className="w-full lg:w-[22%]"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center px-5 py-3">
            <Icon />
            <h2 className="font-semibold">{categoryName}</h2>
          </div>
          <div className="bg-white shadow-lg relative">
            <button
              type="button"
              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center items-center absolute z-20 bg-yellow ${
                workList.length
                  ? "-top-4 -right-4 lg:-top-5 lg:-right-5"
                  : "top-[2.5rem] lg:top-12 -translate-y-1/2 right-1/2 translate-x-1/2 "
              }`}
              onClick={showModal}
            >
              <BsPlus size={30} className="text-white" />
            </button>
            {workList.length ? (
              workList.map((cardDetail, idx) => (
                <DroppableWorkListCard key={idx} cardDetail={cardDetail} idx={idx} />
              ))
            ) : (
              <div className="w-full h-[5.1rem] lg:h-24 bg-white shadow-lg absolute"></div>
            )}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default DroppableWorkList;
