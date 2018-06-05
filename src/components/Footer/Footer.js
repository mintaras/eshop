import React, { Component } from 'react';
import { Layout } from 'antd';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
        <Layout.Footer className="footer">
          mecomm &copy; 2018
        </Layout.Footer>
    );
  }
}

export default Footer;
