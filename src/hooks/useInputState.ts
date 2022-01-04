import React, { useState } from "react";

const useInputState = (initalValue: string)  => {
  const [value, setValue] = useState(initalValue)

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return [value, handleValueChange] as const;
}

export default useInputState;