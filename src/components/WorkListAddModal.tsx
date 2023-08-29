import { FormEvent, useState } from "react";
import { currentAddGroupIdx, groupList, modalState } from "../atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Rate from "./Rate";
import useInput from "../hooks/useInput";
import { IModalStateType } from "modal";

interface IWorkListAddModal {
  type: IModalStateType;
}

const WorkListAddModal = ({ type }: IWorkListAddModal) => {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const [deadline, handleChangeDeadline] = useInput(
    new Date(Date.now() + TIME_ZONE).toISOString().split("T")[0]
  );
  const [title, handleChangeTitle] = useInput();
  const [content, handleChangeContent] = useInput();
  const [rate, setRate] = useState(0);

  const ASetModalState = useSetRecoilState(modalState);
  const currentGroupIdx = useRecoilValue(currentAddGroupIdx);
  const [nGroupList, setNGroupList] = useRecoilState(groupList);

  const addWorkList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newGroupList = nGroupList.map((workList, idx) =>
      idx === currentGroupIdx ? [...workList, { deadline, title, content, rate }] : workList
    );
    setNGroupList(newGroupList);
    ASetModalState({ isVisible: false, type });
  };

  return (
    <form
      onSubmit={addWorkList}
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
          className={`w-full h-10 bg-yellow text-white rounded-xl text-lg ${
            !(deadline && title && content) ? "opacity-50" : ""
          }`}
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default WorkListAddModal;
