import { IInvitation, ITeamMember } from '../types/mainTypes';

export const users: ITeamMember[] = [
  {
    id: 0,
    status: 'request',
    user: {
      id: 0,
      name: 'name0',
      lastName: 'lastName0',
      phone: '+48 333 333 333',
      email: '0user@gmail.com',
    },
    role: 'Administrator',
  },
  {
    id: 1,
    status: 'pending',
    user: {
      id: 1,
      name: 'name1',
      lastName: 'lastName1',
      phone: '+48 333 333 333',
      email: '1user@gmail.com',
    },
    role: 'Administrator',
  },
  {
    id: 2,
    status: 'declined',
    user: {
      id: 2,
      name: 'name2',
      lastName: 'lastName2',
      phone: '+48 333 333 333',
      email: '2user@gmail.com',
    },
    role: 'Standard',
  },
  {
    id: 3,
    status: 'approved',
    user: {
      id: 3,
      name: 'name3',
      lastName: 'lastName3',
      phone: '+48 333 333 333',
      email: '3user@gmail.com',
    },
    role: 'Standard',
  },
];

export const invitations: IInvitation[] = [
  {
    id: 0,
    phone: '+48 000 000 000',
    role: 'Administrator',
  },
  {
    id: 1,
    phone: '+48 111 111 111',
    role: 'Administrator',
  },
  {
    id: 2,
    phone: '+48 222 222 222',
    role: 'Standard',
  },
  {
    id: 3,
    phone: '+48 333 333 333',
    role: 'Standard',
  },
];
