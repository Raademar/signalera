import React from "react";
import { SignaleraItemType } from "./types";

export const SignaleraItem: React.FC<SignaleraItemType> = ({
  color,
  title,
  icon,
  timeToShow,
}) => {
  return (
    <div style={{ backgroundColor: color }}>
      <img src={icon} alt="" />
      <p>{title}</p>
    </div>
  );
};
