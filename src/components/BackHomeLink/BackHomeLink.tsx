import * as React from 'react';
import classnames from 'classnames';

import styles from './BackHomeLink.less';

class BackHomeLink extends React.Component<{ className?: string }, {}> {
  render() {
    return (
      <a href="/" className={ classnames(styles.container, this.props.className || '') }>首页</a>
    );
  }
}

export default BackHomeLink;