import React from 'react';
import UserCard from './user-card';
import Table from '../table';
// styles
import style from '../../../styles/user.module.css'

const Users = () => {
  return (
    <div>
        <h1>Users</h1>
      <div className={style.cardDiv}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>

      <div>
        <Table />
      </div>
    </div>
  );
}

export default Users;
