export interface ITeamMember {
  id: number;
  status: TStatus;
  user: IUserShortData;
  role: TRole;
}

export type TRole = "Administrator" | "Standard";

export type TStatus = "request" | "pending" | "approved" | "declined" | "invited";

export interface IUserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface IInvitation {
  id: number;
  phone: string;
  role: TRole;
}
