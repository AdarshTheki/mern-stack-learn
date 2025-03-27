import { useEffect, useState } from 'react';
import { errorHandler } from './errorHandler';
import useDeviceInfo from './useDeviceInfo';
import instance from './instance';

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const deviceInfo = useDeviceInfo();

  const fetchSessions = async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await instance.get('/user/sessions', {
        headers: { Authorization: `slsc ${token}` },
      });
      setSessions(response.data.sessions);
      console.log(response);
      if (!response.data.sessions) {
        alert(response.data?.message);
      }
    } catch (error) {
      console.log(error);
      // errorHandler(error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const logoutSingleSession = async (id) => {
    try {
      // device ID
      const response = await instance.delete('/user/session/' + id);
      if (response.data) {
        fetchSessions();
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <div>
      <h2>Active Sessions</h2>

      <ul>
        {sessions?.map((session) => (
          <li key={session.deviceId}>
            {session.deviceId == deviceInfo.fingerprint && <strong>Current device</strong>}
            <p>device Id: {session.deviceId}</p>
            <p>
              Created At: {new Date(session.createdAt).toDateString()}{' '}
              {new Date(session.createdAt).toTimeString()}
            </p>
            <p>browser: {session.session?.browser}</p>
            <p>browserVersion: {session.session?.browserVersion}</p>
            <p>fingerprint: {session.session?.fingerprint}</p>
            <p>os: {session.session?.os}</p>
            <button onClick={() => logoutSingleSession(session.deviceId)}>Logout</button>
            <hr />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sessions;
