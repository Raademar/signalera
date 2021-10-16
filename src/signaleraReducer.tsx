import { SignaleraItemType } from "./types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = "ADD_SIGNAL",
  Delete = "DELETE_SIGNAL",
}

type SignalPayload = {
  ADD_SIGNAL: SignaleraItemType;
  DELETE_SIGNAL: {
    id: number;
  };
};

export type SignalActions =
  ActionMap<SignalPayload>[keyof ActionMap<SignalPayload>];

export const signaleraReducer = (
  state: SignaleraItemType[],
  action: SignalActions
) => {
  switch (action.type) {
    case Types.Add: {
      const { id, title, color, icon, timeToShow } = action.payload;
      return [
        ...state,
        {
          id,
          title,
          color,
          icon,
          timeToShow,
        },
      ];
    }
    case Types.Delete: {
      return [...state.filter((signal) => signal.id !== action.payload.id)];
    }

    default:
      return state;
  }
};
