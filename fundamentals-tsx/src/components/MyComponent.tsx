import { useCounter } from "../hooks/useCounter";

const MyComponent = () => {
  const { counter, setCounter } = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
    </div>
  );
};

export default MyComponent;
