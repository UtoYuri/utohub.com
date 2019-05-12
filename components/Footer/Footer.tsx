import * as React from 'react';

import styles from './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={ styles.footer }>
        <div className={ styles.copyright }>
          <span className={ styles.author }>© YURI 2017-{ new Date().getFullYear() }</span>
          <span>苏ICP备16006477号-2</span>
        </div>
      </div>
    );
  }
}

export default Footer;
