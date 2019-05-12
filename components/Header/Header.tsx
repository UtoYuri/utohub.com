import * as React from 'react';
import Head from 'next/head';

import styles from './Header.less';

class CommonHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.header}>
        <Head>
          <title>UTOHUB - Gee乐世界</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='https://io.utohub.com/utohub/home/assets/favicon.ico' />
          <link rel='stylesheet' href='/static/styles/antd.min.css' />
        </Head>
      </div>
    );
  }
}

export default CommonHeader;
