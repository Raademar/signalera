import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SignaleraItemType } from "./types";
import { useSignalera } from "./hooks";
import "./signalera.css";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  id,
  color,
  title,
  icon,
  timeToShow = 5000,
}) => {
  const { removeSignal } = useSignalera();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [color, title, icon, timeToShow]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, timeToShow);
  }, [color, title, icon, timeToShow]);

  return (
    <CSSTransition
      key={id}
      classNames="item"
      timeout={500}
      onExited={() => removeSignal(id)}
      unmountOnExit
      in={show}
    >
      <div style={{ background: color }}>
        <p>{title}</p>
      </div>
    </CSSTransition>
  );
};
