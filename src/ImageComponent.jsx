import { Component } from "react";
// sto coso serve per dire che i componenti a classe derivano da lui, diventano componenti

class ImageComponent extends Component {
  render() {
    return <img src={this.props.link} alt={this.props.alt} />;
  }
}

export default ImageComponent;
