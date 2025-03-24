export interface Event {
  id?: number;
  description: string;
  dateTime: Date;
  location: string;
  cookingCategories: string[];
  maxAttendees: number;
  privacy: string;
}
