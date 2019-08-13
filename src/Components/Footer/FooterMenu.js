import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./FooterMenu.scss";

export class FooterMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="FooterMenu" className="container">
        <Row>
          <Col md={12}>
            <div className="d-flex">
              <div>Martin's Movies</div>
              <div className="copyright ml-auto">
                Copyright 2018.KlbTheme . All rights reserved
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
