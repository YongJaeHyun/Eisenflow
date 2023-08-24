import { BsStarFill } from "react-icons/bs";

interface IRate {
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
  size: number;
}

const Rate = ({ rate, setRate, size }: IRate) => {
  const changeRate = (rate: number) => setRate(rate);
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, idx) => (
          <button type="button" key={idx} onClick={() => changeRate(idx)}>
            <BsStarFill
              size={size}
              className={`${rate >= idx ? "text-yellow" : "text-lightgray"} ${
                idx === 4 && "mr-1"
              }`}
            />
          </button>
        ))}
    </>
  );
};

export default Rate;
