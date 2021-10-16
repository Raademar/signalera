import React, { useEffect } from "react";
import { SignaleraItemType } from "./types";

export const SignaleraItem: React.FC<{
  signal: SignaleraItemType;
  removeSignal: () => void;
}> = ({ signal, removeSignal }) => {
  const { color, title, icon, timeToShow = 5000 } = signal;

  useEffect(() => {
    setTimeout(() => {
      removeSignal();
    }, timeToShow);
  }, [color, title, icon, timeToShow]);

  return (
    <div style={{ backgroundColor: color }}>
      <img src={icon} alt="" />
      <p>{title}</p>
    </div>
  );
};
