import { BsCloudyFill, BsFillLightningChargeFill, BsFire } from "react-icons/bs";
import DroppableWorkList from "./DroppableWorkList";
import GroupInfo from "./GroupInfo";
import { IoMdWater } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { groupList } from "../atoms";

const categoryNames = ["바로 해야할 일", "중요한 일", "긴급한 일", "나중에 할 일"];
const Icons = [
  () => <BsFillLightningChargeFill className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <IoMdWater className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <BsFire className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
  () => <BsCloudyFill className="mr-3 lg:mr-5 text-lg lg:text-xl" />,
];

const DroppableCategories = () => {
  const nGroupList = useRecoilValue(groupList);

  return (
    <main className="h-full lg:h-[calc(100%-4.75rem)]">
      <GroupInfo />
      <section className="grid grid-cols-2 grid-rows-2 lg:flex lg:justify-between gap-5 lg:gap-10 lg:mt-5 relative">
        <span className="w-screen absolute h-0 lg:h-0.5 bg-linegray -left-20 top-[2.95rem] z-10"></span>
        {nGroupList?.map((workList, idx) => (
          <DroppableWorkList
            key={idx}
            Icon={Icons[idx]}
            categoryName={categoryNames[idx]}
            categoryIdx={idx.toString()}
            workList={workList}
          />
        ))}
      </section>
    </main>
  );
};

export default DroppableCategories;
