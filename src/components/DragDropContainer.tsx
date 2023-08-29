import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";
import WorkListCRUDModalRouter from "./WorkListCRUDModalRouter";
import DroppableList from "./DroppableList";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useDeferredValue, useState } from "react";
import { IDraggedCardDetail } from "card";
import { groupList, isCardDragging, modalState } from "../atoms";
import DroppableCategories from "./DroppableCategories";

const DragDropContainer = () => {
  const [AModalState, ASetModalState] = useRecoilState(modalState);
  const ASetIsCardDragging = useSetRecoilState(isCardDragging);
  const [nGroupList, setNGroupList] = useRecoilState(groupList);
  const [draggedCard, setDraggedCard] = useState<IDraggedCardDetail>();
  const deferredIsVisible = useDeferredValue(AModalState.isVisible);

  const onDragStart = () => {
    ASetIsCardDragging(true);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!verifyResult(result)) {
      ASetIsCardDragging(false);
      return;
    }
    if (destination!.droppableId === "수정") {
      handleModify(source);
      return;
    }
    if (destination!.droppableId === "삭제") {
      handleDelete(source);
      return;
    }
    const [startCategoryId, startCardId] = [parseInt(source.droppableId), source.index];
    const [endCategoryId, endCardId] = [
      parseInt(destination!.droppableId),
      destination!.index,
    ];
    const copiedGroupList = structuredClone(nGroupList);
    const startCard = copiedGroupList[startCategoryId].splice(startCardId, 1)[0];
    copiedGroupList[endCategoryId].splice(endCardId, 0, startCard);
    setNGroupList(copiedGroupList);
    ASetIsCardDragging(false);
  };

  const verifyResult = ({ destination, source }: DropResult) => {
    if (!destination) {
      return false;
    }
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return false;
    }
    return true;
  };

  const handleModify = ({ droppableId, index }: DraggableLocation) => {
    setDraggedCard({
      cardDetail: nGroupList[parseInt(droppableId)][index],
      x: parseInt(droppableId),
      y: index,
    });
    ASetIsCardDragging(false);
    ASetModalState({ isVisible: true, type: "modify" });
  };

  const handleDelete = ({ droppableId, index }: DraggableLocation) => {
    const newGroupList = structuredClone(nGroupList);
    newGroupList[parseInt(droppableId)].splice(index, 1);
    setNGroupList(newGroupList);
    ASetIsCardDragging(false);
  };
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <DroppableCategories />
      {deferredIsVisible && (
        <WorkListCRUDModalRouter draggedCardDetail={draggedCard} type={AModalState.type} />
      )}
      <section className="w-screen flex justify-center items-center absolute bottom-10 left-0 z-50 overflow-hidden p-5">
        <DroppableList value="수정" idx={0} className="border-darkgray text-darkgray" />
        <DroppableList value="삭제" idx={1} className="border-red-400 text-red-400" />
      </section>
    </DragDropContext>
  );
};

export default DragDropContainer;
