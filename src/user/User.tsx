import React from 'react';
import './User.css';
import { ITeamMember } from '../types/mainTypes';

export const User = ({
 id,
 status,
 user,
 role,
}: ITeamMember ) => {

  return (
    <li key={`user_${id}`} className="ListItem">
      {/* could add condition for showing email or something like that(depends on data) */}
      <span className="UserItemName">{`${user?.name ?? ''} ${user?.lastName ?? ''}`}</span>
      {/* decided to show this states for User too for have similar structure for items */}
      <span className="ItemStatus">{status}</span>
      {/* it is a string just for saving developing time for now */}
      <span>{'>'}</span>
    </li>
  );
}
