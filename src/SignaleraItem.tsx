import React, { useEffect } from "react";
import { SignaleraItemType } from "./types";
import { useSignalera } from "./hooks";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  id,
  color,
  title,
  icon,
  timeToShow = 5000,
}) => {
  const { removeSignal } = useSignalera();

  useEffect(() => {
    setTimeout(() => {
      removeSignal(id);
    }, timeToShow);
  }, [color, title, icon, timeToShow]);

  return (
    <div style={{ backgroundColor: color }}>
      <img src={icon} alt="" />
      <p>{title}</p>
    </div>
  );
};
