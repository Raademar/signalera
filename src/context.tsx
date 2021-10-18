import React, { createContext, useReducer, Dispatch } from "react";
import { SignaleraItemType, SignaleraOptions } from "./types";
import { signaleraReducer, SignalActions } from "./signaleraReducer";

type SignaleraStateType = {
  signals: SignaleraItemType[];
};

const initialState = {
  signals: [],
};

const initialOptions = {
  darkMode: false,
};
// TODO: Update single darkMode to use Options object instead
export const SignaleraContext = createContext<{
  darkMode: boolean;
  state: SignaleraStateType;
  dispatch: Dispatch<SignalActions>;
}>({
  darkMode: false,
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { signals }: SignaleraStateType,
  action: SignalActions
) => ({
  signals: signaleraReducer(signals, action),
});

export const SignaleraProvider: React.FC<SignaleraOptions> = ({
  children,
  darkMode = true,
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <SignaleraContext.Provider value={{ darkMode, state, dispatch }}>
      {children}
    </SignaleraContext.Provider>
  );
};
