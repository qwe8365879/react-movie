import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./FooterWidget.scss";

export class FooterWidget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="FooterWidget" className="container">
        <Row>
          <Col md={3} sm={6} xs={12}>
            <h2>Martin's Movies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ducimus, atque. Praesentium suscipit provident explicabo
              dignissimos nostrum numquam deserunt earum accusantium et fugit.
            </p>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h2>Martin's Movies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ducimus, atque. Praesentium suscipit provident explicabo
              dignissimos nostrum numquam deserunt earum accusantium et fugit.
            </p>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h2>Martin's Movies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ducimus, atque. Praesentium suscipit provident explicabo
              dignissimos nostrum numquam deserunt earum accusantium et fugit.
            </p>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h2>Martin's Movies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ducimus, atque. Praesentium suscipit provident explicabo
              dignissimos nostrum numquam deserunt earum accusantium et fugit.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
