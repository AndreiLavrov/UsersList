import React from 'react';
import './Invitation.css';
import { IInvitation } from '../types/mainTypes';

export const Invitation = ({
  id,
  phone,
  role,
}: IInvitation ) => {

  return (
    <li key={`invitation_${id}`} className="ListItem">
      <span className="InvitationItemName">{phone}</span>
      <span className="ItemStatus">Invited</span>
      {/* TODO: is a string just for saving time for now */}
      <span>{'>'}</span>
    </li>
  );
}
