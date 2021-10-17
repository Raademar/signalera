import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { levelToColor, SignaleraItemType, SignaleraLevelType } from "./types";
import { useSignalera } from "./hooks";
import { Alert, Info, Success, Warning } from "./assets";
import "./signalera.css";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  id,
  level,
  title,
  icon,
  timeToShow = 5000,
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

  const mapLevelToIcon = (level: SignaleraLevelType) => {
    switch (level) {
      case "primary":
        return <Success color={levelToColor[level]} />;
      case "secondary":
        return <Info color={levelToColor[level]} />;
      case "warning":
        return <Warning color={levelToColor[level]} />;
      case "error":
        return <Alert color={levelToColor[level]} />;

      default:
        break;
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
        className={`signalera-item signalera-dark-mode`}
        onClick={() => exitBeforeTimeout()}
      >
        {mapLevelToIcon(level)}
        <div className="signalera-item-text-container">
          <p className={`signalera-${level}-title`}>{title}</p>
          <p className={`signalera-${level}-body`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};
