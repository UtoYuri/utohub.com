import * as React from 'react';

import Footer from "../Footer/Footer";
import styles from './CommonLayout.less';

interface IProps {
  children: React.ReactNode;
}

class CommonLayout extends React.Component<IProps, {}> {
  render() {
    return (
      <div className={ styles.container }>
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default CommonLayout;