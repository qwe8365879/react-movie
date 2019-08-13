import React, { Component } from "react";
import "./PageTitle.scss";

export class PageTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section className="page-title-section overlay-gradient">
          <div className="container">
            <div className="inner">
              <h2 className="title">{this.props.pageTitle}</h2>
              <ol className="breadcrumb">
                <li>Home</li>
                <li>
                  <span>{this.props.pageTitle}</span>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
