import { ChangeEvent, ChangeEventHandler, useState } from "react";

function useInput(
  userInput?: string
): [string, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>] {
  const [value, setValue] = useState(userInput ?? "");
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return [value, handleChangeValue];
}

export default useInput;
