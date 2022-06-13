import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//import heavy vendor libs
import _ from 'lodash';

import styles from '../styles/Home.module.css';

export default function HomePage({ users }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.homecontainer}>
        <h1>Home Page (SSR)</h1>
        <Link href='/details'>
          <a>Details</a>
        </Link>
        <ul className={styles.listcontainer}>
          {users.map((user) => {
            const id = _.get(user, 'id');
            const name = `${_.get(user, 'first_name', '')} ${_.get(
              user,
              'last_name',
              ''
            )}`;
            const avatar = _.get(user, 'avatar', '');
            return (
              <li key={id}>
                <div className={styles.img}>
                  <Image src={avatar} width={80} height={80} />
                </div>
                <div className={styles.name}>
                  <span>{name}</span>
                  <p>
                    Websites often use third-party scripts to include different
                    types of functionality into their site, such as analytics,
                    ads, customer support widgets, and consent management.
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://reqres.in/api/users?per_page=12');
    const data = await response.json();
    const users = _.get(data, 'data', {});
    return {
      props: {
        users: [...users, ...users], // duplicate data
      },
    };
  } catch (err) {
    console.log('Error when making call: ', err);
    return {
      props: {
        users: [],
      },
    };
  }
}
