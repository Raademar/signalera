export type SignaleraColors = "green" | "blue" | "red" | "orange";

export type SignaleraItemType = {
  id: number;
  title: string;
  color: SignaleraColors;
  icon?: string;
  timeToShow?: number;
};
