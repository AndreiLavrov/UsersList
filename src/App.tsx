import React from 'react';
import './App.css';
import { adminInvitations, adminUsers, standardInvitations, standardUsers } from './api/mockedData';
import { User } from './user/User';
import { Invitation } from './invitation/Invitation';

function App() {
  return (
    // TODO: for reviewers -- it ws strange as for me that we show users and invitations in the same list.
    // I suppose, I understand this condition wrong
    <div className="App">
      <h3>Administrator</h3>
      <ul className='AdminsList'>
        {adminUsers?.map(({ id, status, user, role }) => (
          <User
            id={id}
            status={status}
            user={user}
            role={role}
          />
        ))}

        {adminInvitations?.map(({ id, phone, role }) => (
          <Invitation
            id={id}
            phone={phone}
            role={role}
          />
        ))}
      </ul>

      <h3>Standart users</h3>
      <ul className='AdminsList'>
        {standardUsers?.map(({ id, status, user, role }) => (
          <User
            id={id}
            status={status}
            user={user}
            role={role}
          />
        ))}

        {standardInvitations?.map(({ id, phone, role }) => (
          <Invitation
            id={id}
            phone={phone}
            role={role}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
