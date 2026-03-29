import "./App.css";
import MyComponent from "./components/MyComponent";
import OtherComponent from "./components/OtherComponent";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <MyComponent />
        <OtherComponent />
      </CounterProvider>
    </>
  );
}

export default App;
