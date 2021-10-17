import React, { useContext } from "react";
import { TransitionGroup } from "react-transition-group";
import { SignaleraContext, SignaleraProvider } from "./context";
import { SignaleraItem } from "./SignaleraItem";
import "./signalera.css";
import { SignaleraOptions } from "./types";

const SignaleraItems: React.FC = () => {
  const { state } = useContext(SignaleraContext);

  return (
    <TransitionGroup className="signalera" appear>
      {state.signals.map((signal) => (
        <SignaleraItem key={signal.id} {...signal} />
      ))}
    </TransitionGroup>
  );
};

export const Signalera: React.FC<SignaleraOptions> = ({
  children,
  darkMode,
}) => {
  return (
    <SignaleraProvider darkMode={darkMode}>
      <SignaleraItems />
      {children}
    </SignaleraProvider>
  );
};
