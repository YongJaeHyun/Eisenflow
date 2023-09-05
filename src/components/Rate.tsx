import { BsStarFill } from "react-icons/bs";

interface IRate {
  rate: number;
  setRate?: React.Dispatch<React.SetStateAction<number>>;
  className: string;
}

const Rate = ({ rate, setRate, className }: IRate) => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, idx) =>
          setRate ? (
            <button type="button" key={idx} onClick={() => setRate(idx)}>
              <BsStarFill
                className={`${className} ${rate >= idx ? "text-yellow" : "text-lightgray"} ${
                  idx === 4 && "mr-1"
                }`}
              />
            </button>
          ) : (
            <p key={idx}>
              <BsStarFill
                className={`${className} ${rate >= idx ? "text-yellow" : "text-lightgray"} ${
                  idx === 4 && "mr-1"
                }`}
              />
            </p>
          )
        )}
    </>
  );
};

export default Rate;
