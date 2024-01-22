import PropTypes from 'prop-types';

const UserDataTable = ({ userData }) => {
  if (!userData) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Google ID (Sub)</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userData.sub}</td>
          <td>{userData.name}</td>
          <td>{userData.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

UserDataTable.propTypes = {
  userData: PropTypes.shape({
    sub: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default UserDataTable;
