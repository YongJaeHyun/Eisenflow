import GroupInfo from "./components/GroupInfo";
import Header from "./components/Header";
import GroupWorkList from "./components/GroupWorkList";
import { BsCloudyFill, BsFillLightningChargeFill, BsFire } from "react-icons/bs";
import { IoMdWater } from "react-icons/io";
import GroupWorkListAdder from "./components/GroupWorkListAdder";
import { useRecoilState } from "recoil";
import { groupList, isModalVisible } from "./atoms";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const groupNames = ["바로 해야할 일", "중요한 일", "긴급한 일", "나중에 할 일"];
const Icons = [
  () => <BsFillLightningChargeFill className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <IoMdWater className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <BsFire className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <BsCloudyFill className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
];

function App() {
  const [isVisible, setIsVisible] = useRecoilState(isModalVisible);
  const [nGroupList, setNGroupList] = useRecoilState(groupList);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    const [startGroupId, startCardId] = [parseInt(source.droppableId), source.index];
    const [endGroupId, endCardId] = [parseInt(destination.droppableId), destination.index];
    if (startGroupId === endGroupId && startCardId === endCardId) return;
    const copiedGroupList = structuredClone(nGroupList);
    const startCard = copiedGroupList[startGroupId].splice(startCardId, 1)[0];
    copiedGroupList[endGroupId].splice(endCardId, 0, startCard);
    setNGroupList(copiedGroupList);
  };
  return (
    <div className="h-full px-5 lg:px-20  lg:text-base">
      <Header />
      <main className="h-full lg:h-[calc(100%-4.75rem)]">
        <GroupInfo />
        <section className="grid grid-cols-2 grid-rows-2 lg:flex lg:justify-between gap-5 lg:gap-10 lg:mt-5 relative">
          <DragDropContext onDragEnd={onDragEnd}>
            <span className="w-screen absolute h-0 lg:h-0.5 bg-linegray -left-20 top-[2.95rem] z-10"></span>
            {nGroupList?.map((workList, idx) => (
              <GroupWorkList
                key={idx}
                Icon={Icons[idx]}
                groupName={groupNames[idx]}
                groupIdx={idx.toString()}
                workList={workList}
              />
            ))}
          </DragDropContext>
        </section>
      </main>
      {isVisible && (
        <>
          <div
            onClick={() => setIsVisible(false)}
            className="w-full h-full absolute top-0 left-0 bg-black z-20 animate-bg-fade-in"
          ></div>
          <section className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
            <GroupWorkListAdder />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
