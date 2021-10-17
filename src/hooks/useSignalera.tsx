import React, { useContext } from "react";
import { SignaleraContext } from "../context";
import { SignaleraItemType } from "../types";

export function useSignalera() {
  const context = useContext(SignaleraContext);
  if (context === undefined) {
    throw new Error("useSignalera must be within a SignaleraProvider");
  }

  const { dispatch } = context;

  const addSignal = (signal: SignaleraItemType) => {
    dispatch({
      type: "ADD_SIGNAL",
      payload: signal,
    });
  };

  const removeSignal = (id: number) => {
    dispatch({
      type: "DELETE_SIGNAL",
      payload: {
        id,
      },
    });
  };

  return { addSignal, removeSignal };
}
