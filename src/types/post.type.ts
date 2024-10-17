import { TUser } from "./user.type";

export type TPost = {
  _id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  author: TUser;
  //   upVotes?: number;
  //   upVotedUsers?: Types.ObjectId[];
  //   downVotes?: number;
  //   downVotedUsers?: Types.ObjectId[];
  isPremium: boolean;
  comments?: [];
  updatedAt?: string;
  createdAt?: string;
};
