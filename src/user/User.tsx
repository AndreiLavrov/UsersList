import React from 'react';
import { ITeamMember } from '../types/mainTypes';

export const User = ({
 id,
 status,
 user,
 role,
}: ITeamMember ) => {

  return (
    <li key={`user_${id}`} className="UserItem">
      {/* TODO: could add condition for showing email or somthing like that(depends on data) */}
      <span>{`${user?.name ?? ''} ${user?.lastName ?? ''}`}</span>
      <span>{status}</span>
      {/* TODO: is a string just for saving time for now */}
      <span>{'>'}</span>
    </li>
  );
}
