import { TUser } from "./user.type";

export type TPost = {
  _id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  author: TUser;
  Votes?: number;
  VotedUsers?: string[];
  isPremium: boolean;
  comments?: [];
  updatedAt?: string;
  createdAt?: string;
};

export type TComment = {
  _id: string;
  comment: string;
  user: TUser;
  updatedAt?: string;
  createdAt?: string;
};

export type TComments = TComment[] | undefined;
