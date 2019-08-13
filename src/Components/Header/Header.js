import React, { Component } from "react";
import { NavMenu } from "./NavMenu";

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="pageHeader">
        <NavMenu />
      </div>
    );
  }
}
