import { TUser } from "./user.type";

export type TPost = {
  _id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  author: TUser;
  Votes?: number;
  VotedUsers?: [];
  isPremium: boolean;
  comments?: [];
  updatedAt?: string;
  createdAt?: string;
};
