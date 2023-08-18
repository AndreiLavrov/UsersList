import React from 'react';
import { IInvitation } from '../types/mainTypes';

export const Invitation = ({
  id,
  phone,
  role,
}: IInvitation ) => {

  return (
    <li key={`invitation_${id}`} className="InvitationItem">
      <span>{phone}</span>
      <span>Invited</span>
      {/* TODO: is a string just for saving time for now */}
      <span>{'>'}</span>
    </li>
  );
}
