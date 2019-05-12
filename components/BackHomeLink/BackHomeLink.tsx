import Link from 'next/link';
import * as React from 'react';
import classnames from 'classnames';

import styles from './BackHomeLink.less';

class BackHomeLink extends React.Component<{ className?: string }, {}> {
  render() {
    return (
      <Link href='/'>
        <a className={ classnames(styles.button, this.props.className || '') }>首页</a>
      </Link>
    );
  }
}

export default BackHomeLink;
