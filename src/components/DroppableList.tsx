import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { isCardDragging } from "../atoms";

interface IDroppableList {
  value: string;
  idx: number;
  className: string;
}

const DroppableList = ({ value, idx, className }: IDroppableList) => {
  const AIsCardDragging = useRecoilValue(isCardDragging);

  return (
    <Droppable droppableId={value}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-full flex justify-center items-center transition-all opacity-70 hover:scale-110 hover:opacity-100"
        >
          <Draggable draggableId={value} index={idx}>
            {(provided) => (
              <div
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="w-[97%] lg:w-[41%] h-[6.2rem] -ml-2 -mt-2 lg:m-0"
              >
                {AIsCardDragging && (
                  <p
                    className={`w-full h-full flex justify-center items-center border-4 border-dashed rounded-lg text-xl font-semibold shadow-lg ${className}`}
                  >
                    {value}
                  </p>
                )}
              </div>
            )}
          </Draggable>
        </div>
      )}
    </Droppable>
  );
};

export default DroppableList;
