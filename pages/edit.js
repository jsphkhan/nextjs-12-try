import { useEffect, useState } from 'react';
import Link from 'next/link';

//import heavy vendor libs
import _ from 'lodash';
import moment from 'moment';

import styles from '../styles/Edit.module.css';

export default function EditPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch data on client side
    async function fetchData() {
      try {
        const response = await fetch(
          'https://reqres.in/api/products?per_page=12'
        );
        const data = await response.json();
        const products = _.get(data, 'data', {});
        setProducts(products);
        console.log(products);
      } catch (err) {
        console.log('Error when making call: ', err);
      }
    }
    fetchData();

    const locale = moment.locale();
    console.log(locale);
    console.log(moment().format('DD MM YYYY'));
  }, []);

  return (
    <div className={styles.editcontainer}>
      <h1>Edit Page (Hybrid SSG)</h1>
      <Link href='/'>
        <a>Back</a>
      </Link>
      <ul>
        {products.map((product) => {
          const id = _.get(product, 'id');
          const name = `${_.get(product, 'name', '')}`;
          const color = _.get(product, 'color');
          return (
            <li key={id} style={{ backgroundColor: color }}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
