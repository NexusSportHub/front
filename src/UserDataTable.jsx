import React from 'react';

const UserDataTable = ({ userData }) => {
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

export default UserDataTable;
