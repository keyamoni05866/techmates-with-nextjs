export type TUser = {
  _id:string;
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  profilePicture: string;
  followers?: string;
  following?: string;
  verified?: boolean;
  number?: string;
  address?: string;
  status: "active" | "blocked";
};
