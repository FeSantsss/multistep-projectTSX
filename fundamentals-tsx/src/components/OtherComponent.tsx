import { useCounter } from "../hooks/useCounter";

const OtherComponent = () => {
  const { counter, setCounter } = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 2)}>
        add in other component
      </button>
    </div>
  );
};

export default OtherComponent;
