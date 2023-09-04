import { FormEvent, KeyboardEvent, useState } from "react";
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
  const [isPressedEnter, setIsPressedEnter] = useState(false);

  const ASetModalState = useSetRecoilState(modalState);
  const [nGroupList, setNGroupList] = useRecoilState(groupList);

  const modifyWorkList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPressedEnter) {
      const newGroupList = nGroupList.map((workList, idx) =>
        idx === x
          ? workList.map((card, idx) =>
              idx === y ? { title, content, deadline, rate } : card
            )
          : workList
      );
      setNGroupList(newGroupList);
      localStorage.setItem("groupList", JSON.stringify(newGroupList));
      ASetModalState({ isVisible: false, type });
    }
  };

  const preventEnterSubmit = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !isPressedEnter) {
      setIsPressedEnter(true);
    } else if (isPressedEnter) {
      setIsPressedEnter(false);
    }
  };

  return (
    <form
      onSubmit={modifyWorkList}
      className="w-full lg:w-[40vw] h-72 max-w-[30rem] flex flex-col justify-around bg-white rounded-xl px-8 py-5 shadow-xl z-50 animate-fade-in"
    >
      <div className="flex">
        <div className="w-24">
          <p className="text-right text-darkgray">
            마감기한<sup>*</sup>
          </p>
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
        <div className="w-24">
          <p className="text-right text-darkgray">
            중요도<sup>*</sup>
          </p>
        </div>
        <div className="w-full ml-10 px-2 border-b mr-1 pb-1.5">
          <Rate rate={rate} setRate={setRate} size={16} />
        </div>
      </div>
      <div className="flex">
        <div className="w-24">
          <p className="text-right text-darkgray">
            제목<sup>*</sup>
          </p>
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
        <div className="w-24">
          <p className="text-right text-darkgray">내용&nbsp;</p>
        </div>
        <textarea
          className="w-full ml-10 px-2 border-b pb-1.5 mr-1 text-darkgray"
          placeholder="내용을 입력해주세요."
          spellCheck="false"
          value={content}
          onChange={handleChangeContent}
          onKeyDown={preventEnterSubmit}
        />
      </div>
      <div className="flex justify-center items-center mt-3">
        <button
          disabled={!(deadline && title)}
          className={`w-full h-10 bg-darkgray text-white rounded-xl text-lg ${
            !(deadline && title) ? "opacity-50" : ""
          }`}
        >
          수정
        </button>
      </div>
    </form>
  );
};

export default WorkListModifyModal;
