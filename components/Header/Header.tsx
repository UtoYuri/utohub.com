import * as React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

import styles from './Header.less';

const { publicRuntimeConfig } = getConfig();

class CommonHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.header}>
        <Head>
          <title>UTOHUB - Gee乐世界</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href={`${publicRuntimeConfig.assetPrefix}/static/images/favicon.ico`} />
          <link rel='stylesheet' href={`${publicRuntimeConfig.assetPrefix}/static/styles/antd.min.css`} />
        </Head>
      </div>
    );
  }
}

export default CommonHeader;
