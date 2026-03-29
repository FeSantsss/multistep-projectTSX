import { createContext, useState, type ReactNode } from "react";

// tipagem do Context
interface ICounter {
  counter: number; // tipo do estado
  setCounter: React.Dispatch<React.SetStateAction<number>>; // o set do estado
}

export const CounterContext = createContext<ICounter | null>(null); // criação do context

// tipagem do Provider
interface props {
  children: ReactNode; // os que forem envolvidos pelo Context, serão Children do Context
}

// criação do Provider
export const CounterProvider = ({ children }: props) => {
  // criação do estado que será compartilhado(só será global quando entrar no return do Provider)
  const [counter, setCounter] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {/* agora é global */}
      {children} {/* componente envolvido */}
    </CounterContext.Provider>
  );
};
