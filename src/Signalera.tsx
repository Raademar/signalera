import React, { useContext } from "react";
import { TransitionGroup } from "react-transition-group";
import { SignaleraContext, SignaleraProvider } from "./context";
import { SignaleraItem } from "./SignaleraItem";

const SignaleraItems: React.FC = () => {
  const { state } = useContext(SignaleraContext);

  return (
    <TransitionGroup>
      {state.signals.map((signal) => (
        <SignaleraItem key={signal.id} {...signal} />
      ))}
    </TransitionGroup>
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
