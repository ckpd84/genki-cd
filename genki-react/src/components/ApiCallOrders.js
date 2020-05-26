import React, { Component } from "react";
import Card from "./Card";

class ApiCallOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      meta: "",
      orders: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/orders")
      .then(res => res.json())
      .then(result => {
        this.setState({
          meta: result.meta,
          orders: result.orders
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const name = "Ordenes en la Base de datos";
    const { error, meta } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <Card name={name} count={meta.count} />;
    }
  }
}
export default ApiCallOrders;
