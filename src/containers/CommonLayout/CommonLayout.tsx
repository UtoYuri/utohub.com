import * as React from 'react';

import Footer from "../Footer/Footer";

interface IProps {
  children: React.ReactNode;
}

class CommonLayout extends React.Component<IProps, {}> {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default CommonLayout;