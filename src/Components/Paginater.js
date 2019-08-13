import React, { Component } from "react";
import { Pagination, Row, Col } from "react-bootstrap";

export default class Paginater extends Component {
  constructor(props) {
    super(props);
  }

  buildPagination(props) {
    var items = [];
    if (props.currentPage > 1) {
      items.push(<Pagination.Prev key="prev" href={props.pageLink + (parseInt(props.currentPage) - 1) + props.queryString}/>);
    }

    for (let num = 1; num <= props.totalPage; num++) {
      items.push(
        <Pagination.Item key={num} active={num == props.currentPage} href={props.pageLink + num + props.queryString}>
          {num}
        </Pagination.Item>
      );
    }

    if (props.currentPage < props.totalPage) {
      items.push(<Pagination.Next key="next" href={props.pageLink + (parseInt(props.currentPage) + 1) + props.queryString}/>);
    }

    return items;
  }

  render() {
    return (
          <Pagination className="justify-content-center">{this.buildPagination(this.props)}</Pagination>
    );
  }
}
