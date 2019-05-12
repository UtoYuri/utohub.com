import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Project from '../containers/Project/Project';

interface IProps {
  projectName: string;
}

export default class extends React.Component<IProps, {}> {

  static async getInitialProps({ query }: any) {
    return { projectName: query.name };
  }

  render(): React.ReactNode {
    const { projectName } = this.props;

    return (
      <Layout>
        <Project projectName={projectName} />
      </Layout>
    );
  }
}
