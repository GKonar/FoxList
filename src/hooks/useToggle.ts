import { useState } from "react";
function useToggle(initialVal = false) {
  const [state, setState] = useState<boolean>(initialVal);
  const toggle = (): void => {
    setState(!state);
  };
  return [state, toggle];
}
export default useToggle;
