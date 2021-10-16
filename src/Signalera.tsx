import React, { useContext } from "react";
import { SignaleraContext, SignaleraProvider } from "./context";
import { SignaleraItem } from "./SignaleraItem";

const SignaleraItems: React.FC = () => {
  const { dispatch, state } = useContext(SignaleraContext);

  const removeSignal = (id: number) => {
    dispatch({
      type: "DELETE_SIGNAL",
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      {state.signals.map((signal) => (
        <SignaleraItem
          key={signal.id}
          signal={signal}
          removeSignal={() => removeSignal(signal.id)}
        />
      ))}
    </div>
  );
};

export function useSignalera() {
  const context = useContext(SignaleraContext);
  if (context === undefined) {
    throw new Error("useSignalera must be within a SignaleraProvider");
  }
  return context;
}

export const Signalera: React.FC = ({ children }) => {
  return (
    <SignaleraProvider>
      <SignaleraItems />
      {children}
    </SignaleraProvider>
  );
};
