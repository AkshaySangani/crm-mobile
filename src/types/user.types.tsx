import { statusEnum } from "@/utils/enums";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  role?: string;
  status?: statusEnum;
}