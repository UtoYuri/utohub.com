import * as React from 'react';

import styles from './Copyright.less';

class Copyright extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <span className={ styles.copyright }>© YURI 2017-{ new Date().getFullYear() }</span>
        <span>苏ICP备16006477号-2</span>
      </div>
    );
  }
}

export default Copyright;