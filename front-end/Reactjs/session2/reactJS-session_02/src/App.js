import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import { Component } from "react";
import { images } from "./assets/images";

class App extends Component {
  constructor() {
    super();
    this.state = { imageIndex: 0 };
  }

  handleClick = () => {
    const random = Math.round(Math.random());

    this.setState({ imageIndex: random });
  };
  render() {
    return (
      <div className="App">
        <Image imageUrl={this.state.imageIndex ? images[1] : images[0]} />

        <br />

        <button onClick={this.handleClick}>Flip</button>
      </div>
    );
  }
}

export default App;
