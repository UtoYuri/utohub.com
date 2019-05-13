import * as React from 'react';
import getConfig from 'next/config';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.less';

interface ILayoutProps {
  children?: React.ReactNode;
}

const { publicRuntimeConfig } = getConfig();

class Layout extends React.Component<ILayoutProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layout}>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-image: url('${publicRuntimeConfig.assetPrefix}/static/images/background.png');
          }
          a {
            text-decoration: none;
            color: #000;
          }
        `}</style>
        <Header />
        { children }
        <Footer />
      </div>
    );
  }
}

export default Layout;
