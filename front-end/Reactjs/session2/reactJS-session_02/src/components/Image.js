import { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.imageUrl} />;
  }
}

export default Image;
