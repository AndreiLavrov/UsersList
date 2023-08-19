import { invitations, users } from '../api/mockedData';
import { promiseTimeout } from '../utils/restructureData';

// requests like are bellow
export const getUsers = async () => await promiseTimeout(() => users, 1000);
export const getInvitations = async () => await promiseTimeout(() => invitations, 2000);
