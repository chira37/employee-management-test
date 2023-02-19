export type Employee = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "m" | "f" | string;
  photo?: string;
};
