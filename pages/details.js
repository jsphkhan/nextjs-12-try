import { useEffect } from 'react';
import Link from 'next/link';

//import heavy vendor libs
import moment from 'moment';

import styles from '../styles/Details.module.css';

export default function DetailsPage() {
  useEffect(() => {
    const locale = moment.locale();
    console.log(locale);
    console.log(moment().format('DD MM YYYY'));
  }, []);

  return (
    <div className={styles.detailscontainer}>
      <h1>Details Page (SSG without data)</h1>
      <Link href='/'>
        <a>Back</a>
      </Link>
      <div>
        <p>
          We recommend using Static Generation (with and without data) whenever
          possible because your page can be built once and served by CDN, which
          makes it much faster than having a server render the page on every
          request. You can use Static Generation for many types of pages,
          including: Marketing pages Blog posts E-commerce product listings Help
          and documentation You should ask yourself: "Can I pre-render this page
          ahead of a user's request?" If the answer is yes, then you should
          choose Static Generation.
        </p>
        <p>
          Websites often use third-party scripts to include different types of
          functionality into their site, such as analytics, ads, customer
          support widgets, and consent management. However, this can introduce
          problems that impact both user and developer experience: Some
          third-party scripts are heavy on loading performance and can drag down
          the user experience, especially if they are render-blocking and delay
          any page content from loading Developers often struggle to decide
          where to place third-party scripts in an application to ensure optimal
          loading The Script component makes it easier for developers to place a
          third-party script anywhere in their application while taking care of
          optimizing its loading strategy.
        </p>
      </div>
    </div>
  );
}
