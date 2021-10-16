import React, { createContext, useReducer, Dispatch } from "react";
import { SignaleraItemType } from "./types";
import { signaleraReducer, SignalActions } from "./signaleraReducer";

type SignaleraStateType = {
  signals: SignaleraItemType[];
};

const initialState = {
  signals: [],
};

export const SignaleraContext = createContext<{
  state: SignaleraStateType;
  dispatch: Dispatch<SignalActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { signals }: SignaleraStateType,
  action: SignalActions
) => ({
  signals: signaleraReducer(signals, action),
});

export const SignaleraProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <SignaleraContext.Provider value={{ state, dispatch }}>
      {children}
    </SignaleraContext.Provider>
  );
};
