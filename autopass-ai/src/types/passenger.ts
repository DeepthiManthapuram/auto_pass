export interface Passenger {
  id: string;
  name: string;
  phone: string;
  age: number;
  gender: "male" | "female" | "other";
  address: string;
  faceImage: string;
  registrationDate: string;
  activeStatus: boolean;
}