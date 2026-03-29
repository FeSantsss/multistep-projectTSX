import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(" Context not found");
  }

  return context;
};
