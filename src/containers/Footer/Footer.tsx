import * as React from 'react';

import styles from './Footer.less';
import Copyright from "../../components/Copyright/CopyRight";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Copyright />
      </div>
    );
  }
}

export default Footer;