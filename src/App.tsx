import GroupInfo from "./components/GroupInfo";
import Header from "./components/Header";
import GroupWorkList from "./components/GroupWorkList";
import { BsCloudyFill, BsFillLightningChargeFill, BsFire } from "react-icons/bs";
import { IoMdWater } from "react-icons/io";

function App() {
  return (
    <div className="px-20">
      <Header />
      <main>
        <GroupInfo />
        <section className="flex justify-between gap-10 mt-5 relative">
          <span className="w-screen absolute h-0.5 bg-linegray -left-20 top-[2.95rem] z-10"></span>
          <GroupWorkList
            Icon={() => <BsFillLightningChargeFill size={22} className="mr-5" />}
            groupName="바로 해야할 일"
          />
          <GroupWorkList
            Icon={() => <BsFire size={22} className="mr-5" />}
            groupName="급하지만 중요하지 않은 일"
          />
          <GroupWorkList
            Icon={() => <IoMdWater size={22} className="mr-5" />}
            groupName="급하지 않지만 중요한 일"
          />
          <GroupWorkList
            Icon={() => <BsCloudyFill size={22} className="mr-5" />}
            groupName="나중에 할 일"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
