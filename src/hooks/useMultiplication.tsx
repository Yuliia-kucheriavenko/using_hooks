import { useCallback, useState } from "react"

export const useMultiplication = () => {
  const [value, setValue] = useState(1);
  const multiplication = useCallback(() => setValue(value * 2), [value]);

  return {multiplication, value};
}