import * as React from 'react';
import { Icon } from 'antd';
import 'antd/lib/icon/style/css';

import styles from './Home.less';
import Layout from "../../containers/CommonLayout/CommonLayout";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.banner}>
              <h1 className={styles.title}>UTOHUB</h1>
              <p className={styles.slogan}>创意  •  实用  •  共享  •  开源</p>
              <p className={styles.description}>知道在哪儿，世界就变得像一张地图那么小；不知道在哪儿，世界才广阔。</p>
            </div>
            <div className={styles.links}>
              <div className={styles.link}>
                <a href="https://github.com/UtoYuri" target="_blank">
                  <Icon type="github" className={styles.icon} />
                </a>
              </div>
              <div className={styles.link}>
                <a href="mailto:support@utohub.com" target="_blank">
                  <Icon type="mail" className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;