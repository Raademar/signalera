export type SignaleraLevelType =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info";

export type SignaleraItemType = {
  id: number;
  title: string;
  level: "primary" | "secondary" | "error" | "warning" | "info";
  icon?: string;
  timeToShow?: number;
};
