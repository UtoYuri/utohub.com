import * as React from 'react';

import styles from './ErrorPage.less';
import Layout from "../../containers/CommonLayout/CommonLayout";
import ErrorInfo from "../../containers/ErrorInfo/ErrorInfo";

class ErrorPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            <ErrorInfo />
          </div>
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;