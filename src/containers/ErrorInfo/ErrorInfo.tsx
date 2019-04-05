import * as React from 'react';

import styles from './ErrorInfo.less';

interface IProps {
  title?: string;
  description?: string;
}

class ErrorPage extends React.Component<IProps, {}> {
  render() {
    const { title, description } = this.props;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{ title || 'Error' }</h1>
        <p className={styles.description}>{ description || 'Something went wrong!' }</p>
      </div>
    );
  }
}

export default ErrorPage;