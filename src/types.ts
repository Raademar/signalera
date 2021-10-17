export type SignaleraColors = "green" | "blue" | "red" | "orange"; // Make this be types/level instead

export type SignaleraItemType = {
  id: number;
  title: string;
  color: string; // Change to type
  icon?: string;
  timeToShow?: number;
};
