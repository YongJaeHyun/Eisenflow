import { IDraggedCardDetail } from "card";
import WorkListAddModal from "./WorkListAddModal";
import WorkListModifyModal from "./WorkListModifyModal";
import { IModalStateType } from "modal";
import { useSetRecoilState } from "recoil";
import { modalState } from "../atoms";

interface IWorkListCRUDModalRouter {
  draggedCardDetail?: IDraggedCardDetail;
  type: IModalStateType;
}

const WorkListCRUDModalRouter = ({ draggedCardDetail, type }: IWorkListCRUDModalRouter) => {
  const ASetModalState = useSetRecoilState(modalState);
  return (
    <>
      <div
        onClick={() => ASetModalState({ isVisible: false, type: type })}
        className="w-full h-full absolute top-0 left-0 bg-black z-20 animate-bg-fade-in"
      ></div>
      <section className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
        {type === "add" ? (
          <WorkListAddModal type={type} />
        ) : (
          <WorkListModifyModal draggedCardDetail={draggedCardDetail!} type={type} />
        )}
      </section>
    </>
  );
};

export default WorkListCRUDModalRouter;
