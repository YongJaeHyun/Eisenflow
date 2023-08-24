import { ChangeEvent, ChangeEventHandler, useState } from "react";

function useInput(userInput?: string): [string, ChangeEventHandler<HTMLInputElement>] {
  const [value, setValue] = useState(userInput ?? "");
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, handleChangeValue];
}

export default useInput;
