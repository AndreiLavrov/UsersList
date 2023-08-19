import React from 'react';
import './App.css';
import { adminInvitations, adminUsers, standardInvitations, standardUsers } from './api/mockedData';
import { User } from './user/User';
import { Invitation } from './invitation/Invitation';

function App() {
  return (
    /* TODO: for reviewers -- it was strange as for me that we show users and invitations in the same list.
         I suppose, I understand this condition wrong */
    <div className="App">
      <div className="Container">
        <section className="ListSection">
          <h3 className="SectionTitle">Administrator</h3>
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
        </section>

        <section className="ListSection">
          <h3 className="SectionTitle">Standard users</h3>
          <ul className='StandardList'>
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
        </section>
      </div>
    </div>
  );
}

export default App;
