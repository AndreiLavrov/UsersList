import React, { useEffect, useState } from 'react';
import './App.css';
import { getRestructuredData, promiseTimeout } from './utils/restructureData';
import { getInvitations, getUsers } from './api/requests';
import { IInvitation, ITeamMember } from './types/mainTypes';
import { User } from './user/User';
import { Invitation } from './invitation/Invitation';

function App() {
  const [adminUsers, setAdminUsers] = useState<ITeamMember[]>([]);
  const [standardUsers, setStandardUsers] = useState<ITeamMember[]>([]);
  const [adminInvitations, setAdminInvitations] = useState<IInvitation[]>([]);
  const [standardInvitations, setStandardInvitations] = useState<IInvitation[]>([]);

  const [areUsersLoading, setAreUsersLoading] = useState<boolean>(true);
  const [areInvitationsLoading, setAreInvitationsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers()
      .then((r) => {
        const { admins, standards } = getRestructuredData(r);

        setAdminUsers(admins as ITeamMember[]);
        setStandardUsers(standards as ITeamMember[]);
      })
      .catch(e => console.error(e))
      .finally(() => setAreUsersLoading(false));

    getInvitations()
      .then((r) => {
        const { admins, standards } = getRestructuredData(r);

        setAdminInvitations(admins as IInvitation[]);
        setStandardInvitations(standards as IInvitation[]);
      })
      .catch(e => console.error(e))
      .finally(() => setAreInvitationsLoading(false));

  }, [])

  return (
    /* TODO: for reviewers -- it was strange as for me that we show users and invitations in the same list.
         I suppose, I understand this condition wrong */
    <div className="App">
      <div className="Container">
        <section className="ListSection">
          <h3 className="SectionTitle">Administrator</h3>
          <ul className='AdminsList'>
            {!areUsersLoading && adminUsers?.map(({ id, status, user, role }) => (
              <User
                id={id}
                status={status}
                user={user}
                role={role}
              />
            ))}

            {areUsersLoading && <div>data is loading...</div>}

            {!areInvitationsLoading && adminInvitations?.map(({ id, phone, role }) => (
              <Invitation
                id={id}
                phone={phone}
                role={role}
              />
            ))}

            {areInvitationsLoading && <div>data is loading...</div>}
          </ul>
        </section>

        {/* // also I would move these sections to another components
         and avoid redundant rerender(when another state is changing) using useMemo and React.Memo */}
        <section className="ListSection">
          <h3 className="SectionTitle">Standard users</h3>
          <ul className='StandardList'>
            {!areUsersLoading && standardUsers?.map(({ id, status, user, role }) => (
              <User
                id={id}
                status={status}
                user={user}
                role={role}
              />
            ))}

            {areUsersLoading && <div>data is loading...</div>}

            {!areInvitationsLoading && standardInvitations?.map(({ id, phone, role }) => (
              <Invitation
                id={id}
                phone={phone}
                role={role}
              />
            ))}

            {areInvitationsLoading && <div>data is loading...</div>}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
