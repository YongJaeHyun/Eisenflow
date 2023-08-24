import { useState } from "react";
import { ICardData } from "../atoms";
import Dropdown from "./Dropdown";
import Rate from "./Rate";
import { Draggable } from "react-beautiful-dnd";

interface IGroupWorkListCard {
  cardData: ICardData;
  idx: number;
}

const GroupWorkListCard = ({
  cardData: { deadline, rate, title, content },
  idx,
}: IGroupWorkListCard) => {
  const [initRate, setRate] = useState(rate);
  const month = deadline.getMonth() + 1;
  const days = deadline.getDate();

  return (
    <Draggable draggableId={deadline.toDateString() + rate + title + content} index={idx}>
      {(provided) => (
        <div
          className="flex border-b bg-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="w-1/5 h-24 flex justify-center items-center">
            <button type="button" className="w-4 h-4 rounded-full border-2"></button>
          </div>
          <div className="w-4/5 pr-4 my-5">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{`~${month}월 ${days}일`}</span>
              <div className="flex items-center">
                <Rate rate={initRate} setRate={setRate} size={12} />
              </div>
            </div>
            <Dropdown title={title} content={content} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default GroupWorkListCard;
