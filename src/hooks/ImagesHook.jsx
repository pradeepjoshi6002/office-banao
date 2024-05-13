import { useState, useEffect } from "react";

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {}, [value]);

  return value;
}

export default useCustomHook;
