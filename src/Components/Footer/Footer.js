import React, { Component } from "react";
import { FooterMenu } from './FooterMenu';
import { FooterWidget } from './FooterWidget'
import './Footer.scss';

export class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="pageFooter">
          <FooterWidget />
          <FooterMenu />
      </div>
    );
  }
}
