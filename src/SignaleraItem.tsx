import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SignaleraItemType, SignaleraLevelType } from "./types";
import { useSignalera } from "./hooks";
import "./signalera.css";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  id,
  level,
  title,
  icon,
  timeToShow = 5000000000000000,
}) => {
  const { removeSignal } = useSignalera();

  const [show, setShow] = useState(false);

  let timeoutId: number;

  useEffect(() => {
    setShow(true);
  }, [level, title, icon, timeToShow]);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setShow(false);
    }, timeToShow);
  }, [level, title, icon, timeToShow]);

  const exitBeforeTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setShow(false);
  };

  const mapLevelToClassname = (level: SignaleraLevelType) => {
    switch (level) {
      case "primary":
        return "signalera-background-primary";
      case "secondary":
        return "signalera-background-secondary";
      case "error":
        return "signalera-background-error";
      case "warning":
        return "signalera-background-warning";
      case "info":
        return "signalera-background-info";
      default:
        return "";
    }
  };

  return (
    <CSSTransition
      key={id}
      classNames="item"
      timeout={500}
      onExited={() => removeSignal(id)}
      unmountOnExit
      in={show}
    >
      <div
        className={`signalera-item ${mapLevelToClassname(level)}`}
        onClick={() => exitBeforeTimeout()}
      >
        <p>{title}</p>
      </div>
    </CSSTransition>
  );
};
