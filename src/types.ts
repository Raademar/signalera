export type SignaleraLevelType = "primary" | "secondary" | "error" | "warning";

export type SignaleraItemUserInput = {
  title: string;
  body?: string;
  level?: "primary" | "secondary" | "error" | "warning";
  timeToShow?: number;
};

export type SignaleraItemType = {
  id: number;
  title: string;
  body: string;
  level: "primary" | "secondary" | "error" | "warning";
  timeToShow?: number;
};

export const levelToColor = {
  primary: "#00fa9a",
  secondary: "#00ffff",
  error: "#f64747",
  warning: "#f59208",
};

export type SignaleraOptions = {
  darkMode: boolean;
};
