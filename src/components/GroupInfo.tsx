import { IoMdArrowDropdown } from "react-icons/io";

const GroupInfo = () => {
  return (
    <section className="flex items-center py-5">
      <div className="flex w-full flex-col lg:justify-between gap-3 lg:gap-5">
        <div className="flex items-center">
          <div className="mr-3 lg:mr-5">
            <span className="font-bold text-base">Group</span>
          </div>
          <div className="relative">
            <select
              name="group"
              id="group"
              className="lg:w-52 font-semibold border-b-2 pb-1 lg:pb-2 border-linegray mr-12 mt-2 text-base"
            >
              <option value="1">Matrix App1</option>
              <option value="2">Matrix App2</option>
              <option value="3">Matrix App3</option>
              <option value="4">Matrix App4</option>
            </select>
            <IoMdArrowDropdown className="absolute right-12 bottom-2.5 -z-10" size={20} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between lg:justify-normal items-center">
            <div className="mr-3 lg:mr-5">
              <span className="font-bold text-base">Members</span>
            </div>
            <div className="flex items-center">
              <img
                alt="프로필 사진"
                src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                className="w-8 h-8 rounded-full mr-2 lg:mr-4 object-cover"
              />
              <img
                alt="프로필 사진"
                src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                className="w-8 h-8 rounded-full mr-2 lg:mr-4 object-cover"
              />
              <img
                alt="프로필 사진"
                src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                className="w-8 h-8 rounded-full mr-2 lg:mr-4 object-cover"
              />
              <img
                alt="프로필 사진"
                src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                className="w-8 h-8 rounded-full mr-2 lg:mr-4 object-cover"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-3 lg:mr-5">
              <span className="font-bold text-base">Sort by</span>
            </div>
            <div className="relative">
              <select
                name="sort"
                id="sort"
                className="w-full lg:w-52 font-semibold border-b-2 pb-0.5 lg:pb-2 border-linegray mt-2 text-base"
              >
                <option value="importance">중요도순</option>
                <option value="date">추가한 날짜순</option>
              </select>
              <IoMdArrowDropdown className="absolute right-0 bottom-2.5 -z-10" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupInfo;
