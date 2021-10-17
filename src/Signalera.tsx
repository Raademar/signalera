import React, { useContext } from "react";
import { SignaleraContext, SignaleraProvider } from "./context";
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

export const Signalera: React.FC = ({ children }) => {
  return (
    <SignaleraProvider>
      <SignaleraItems />
      {children}
    </SignaleraProvider>
  );
};
