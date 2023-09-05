import Dropdown from "./Dropdown";
import Rate from "./Rate";
import { Draggable } from "react-beautiful-dnd";
import { ICardDetail } from "card";

interface IDroppableWorkListCard {
  cardDetail: ICardDetail;
  idx: number;
}

const DroppableWorkListCard = ({
  cardDetail: { deadline, rate, title, content },
  idx,
}: IDroppableWorkListCard) => {
  const deadlineDate = new Date(deadline);
  const month = deadlineDate.getMonth() + 1;
  const days = deadlineDate.getDate();
  return (
    <Draggable
      draggableId={deadline + rate + title + content}
      index={idx}
      key={deadline + rate + title + content}
    >
      {(provided) => (
        <div
          className="flex border-b bg-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="w-full px-4 lg:px-8 my-3 lg:my-5">
            <div className="flex justify-between mb-1">
              <span className="text-3md">{`~${month}월 ${days}일`}</span>
              <div className="flex items-center">
                <Rate rate={rate} className="text-2md" />
              </div>
            </div>
            <Dropdown title={title} content={content} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DroppableWorkListCard;
