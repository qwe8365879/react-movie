import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header/Header";
import { Footer } from './Footer/Footer';
import "./Layout.scss";

export class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        {this.props.children}
        <Footer />
      </Container>
    );
  }
}
