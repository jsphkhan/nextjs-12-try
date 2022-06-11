import { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//import heavy vendor libs
import _ from 'lodash';
import moment from 'moment';

import styles from '../styles/Home.module.css';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // make call
    async function fetchData() {
      try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const data = await response.json();
        const users = _.get(data, 'data', {});
        console.log(users);
        setUsers(users);
      } catch(err) {
        console.log('Error when making call: ', err);
      }
    }
    fetchData();

    const locale = moment.locale();
    console.log(locale);
    console.log(moment().format('DD MM YYYY'));
  }, []);

  return (
    <>
      <Head>
        <title>Home Page - Users</title>
      </Head>
      <h1>Home Page</h1>
      <Link href="/details"><a>Details</a></Link>
      <ul className={styles.listcontainer}>
        {users.map((user) => {
          const id = _.get(user, 'id');
          const name = `${_.get(user, 'first_name', '')} ${_.get(user, 'last_name', '')}`;
          const avatar = _.get(user, 'avatar', '');
          return (
            <li key={id}>
              <Image src={avatar} width={80} height={80} />
              <span className={styles.name}>{name}</span>
            </li>
          )
        })}
      </ul>
    </>
  );
}
