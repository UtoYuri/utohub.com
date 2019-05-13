import * as React from 'react';
import classnames from 'classnames';

import Routes from '../../routes';
import styles from './BackHomeLink.less';

class BackHomeLink extends React.Component<{ className?: string }, {}> {
  render() {
    return (
      <Routes.Link route='/'>
        <a className={ classnames(styles.button, this.props.className || '') }>首页</a>
      </Routes.Link>
    );
  }
}

export default BackHomeLink;
