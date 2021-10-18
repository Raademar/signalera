import React, { useEffect, useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { SignaleraContext } from "./context";
import { levelToColor, SignaleraItemType, SignaleraLevelType } from "./types";
import { useSignalera } from "./hooks";
import { Alert, Info, Success, Warning } from "./assets";
import "./signalera.css";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  id,
  level,
  title,
  body,
  timeToShow = 5000000000,
}) => {
  const { darkMode } = useContext(SignaleraContext);
  const { removeSignal } = useSignalera();

  const [show, setShow] = useState(false);

  let timeoutId: number;

  useEffect(() => {
    setShow(true);
  }, [level, title, timeToShow]);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setShow(false);
    }, timeToShow);
  }, [level, title, timeToShow]);

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
        className={`signalera-item slide-${show ? "in" : "out"} ${
          darkMode
            ? "signalera-dark-mode"
            : `signalera-light-${level}-background`
        } `}
        onClick={() => exitBeforeTimeout()}
      >
        <div className="signalera-icon-wrapper">{mapLevelToIcon(level)}</div>
        <div className="signalera-item-text-container">
          <p
            className={`signalera-${
              darkMode ? "dark" : "light"
            }-${level}-title signalera-title`}
          >
            {title}
          </p>
          <p
            className={`signalera-${
              darkMode ? "dark" : "light"
            }-${level}-body signalera-body`}
          >
            {body}
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};
