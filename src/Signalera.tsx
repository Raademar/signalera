import React, { useContext } from "react";
import { SignaleraContext } from "./context";
import { SignaleraItem } from "./SignaleraItem";

const SignaleraItems: React.FC = () => {
  const { state } = useContext(SignaleraContext);
  return (
    <div>
      {state.signals.map((signal) => (
        <SignaleraItem key={signal.id} {...signal} />
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

export const Signalera: React.FC = () => {
  return <SignaleraItems />;
};
