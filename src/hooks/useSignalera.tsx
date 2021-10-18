import { useContext } from "react";
import { SignaleraContext } from "../context";
import { SignaleraItemType, SignaleraItemUserInput } from "../types";

export function useSignalera() {
  const context = useContext(SignaleraContext);
  if (context === undefined) {
    throw new Error("useSignalera must be within a SignaleraProvider");
  }

  const { dispatch } = context;

  const addSignal = (signal: SignaleraItemUserInput) => {
    const baseSignal: SignaleraItemType = {
      id: Date.now(),
      title: signal.title,
      body: signal.body || "",
      level: signal.level || "primary",
      timeToShow: signal.timeToShow || 5000,
    };

    const signalToAdd: SignaleraItemType = { ...baseSignal, ...signal };

    dispatch({
      type: "ADD_SIGNAL",
      payload: signalToAdd,
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
