import { FormEvent, useState } from "react";
import { groupList, modalState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import Rate from "./Rate";
import useInput from "../hooks/useInput";
import { IDraggedCardDetail } from "card";
import { IModalStateType } from "modal";

export interface IWorkListModifyModal {
  draggedCardDetail: IDraggedCardDetail;
  type: IModalStateType;
}
const WorkListModifyModal = ({
  draggedCardDetail: { cardDetail, x, y },
  type,
}: IWorkListModifyModal) => {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const [deadline, handleChangeDeadline] = useInput(
    cardDetail?.deadline ?? new Date(Date.now() + TIME_ZONE).toISOString().split("T")[0]
  );
  const [title, handleChangeTitle] = useInput(cardDetail?.title);
  const [content, handleChangeContent] = useInput(cardDetail?.content);
  const [rate, setRate] = useState(cardDetail?.rate ?? 0);

  const ASetModalState = useSetRecoilState(modalState);
  const [nGroupList, setNGroupList] = useRecoilState(groupList);

  const modifyWorkList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newGroupList = nGroupList.map((workList, idx) =>
      idx === x
        ? workList.map((card, idx) => (idx === y ? { title, content, deadline, rate } : card))
        : workList
    );
    setNGroupList(newGroupList);
    ASetModalState({ isVisible: false, type });
  };

  return (
    <form
      onSubmit={modifyWorkList}
      className="w-full lg:w-[40vw] h-72 max-w-[30rem] flex flex-col justify-around bg-white rounded-xl px-8 py-5 shadow-xl z-50 animate-fade-in"
    >
      <div className="flex">
        <div className="w-20">
          <p className="text-right text-darkgray">마감기한</p>
        </div>
        <input
          type="date"
          className="w-full ml-10 px-2 border-b pb-1.5 mr-1"
          placeholder="마감기한을 선택해주세요."
          value={deadline}
          onChange={handleChangeDeadline}
        />
      </div>
      <div className="flex">
        <div className="w-20">
          <p className="text-right text-darkgray">중요도</p>
        </div>
        <div className="w-full ml-10 px-2 border-b mr-1 pb-1.5">
          <Rate rate={rate} setRate={setRate} size={16} />
        </div>
      </div>
      <div className="flex">
        <div className="w-20">
          <p className="text-right text-darkgray">제목</p>
        </div>
        <input
          className="w-full ml-10 px-2 border-b pb-1.5 mr-1"
          placeholder="제목을 입력해주세요."
          spellCheck="false"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="flex">
        <div className="w-20">
          <p className="text-right text-darkgray">내용</p>
        </div>
        <input
          className="w-full ml-10 px-2 border-b pb-1.5 mr-1"
          placeholder="내용을 입력해주세요."
          spellCheck="false"
          value={content}
          onChange={handleChangeContent}
        />
      </div>
      <div className="flex justify-center items-center mt-3">
        <button
          disabled={!(deadline && title && content)}
          className={`w-full h-10 bg-darkgray text-white rounded-xl text-lg ${
            !(deadline && title && content) ? "opacity-50" : ""
          }`}
        >
          수정
        </button>
      </div>
    </form>
  );
};

export default WorkListModifyModal;
