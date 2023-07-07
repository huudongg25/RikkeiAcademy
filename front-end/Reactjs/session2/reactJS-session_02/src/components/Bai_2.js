import { Component } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";

class Bai_2 extends Component {
  constructor() {
    super();
    this.state = { iconsIndex: [0, 1], className: "icons" };
  }

  handleClick = () => {
    const random1 = Math.floor(Math.random() * 6);
    const random2 = Math.floor(Math.random() * 6);

    this.setState({
      iconsIndex: [random1, random2],
      className: "shaking icons",
    });
    setTimeout(() => {
      this.setState({
        className: "icons",
      });
    }, 1000);
  };
  render() {
    const icons = [
      <BsFillDice1Fill className={this.state.className} />,
      <BsFillDice2Fill className={this.state.className} />,
      <BsFillDice3Fill className={this.state.className} />,
      <BsFillDice4Fill className={this.state.className} />,
      <BsFillDice5Fill className={this.state.className} />,
      <BsFillDice6Fill className={this.state.className} />,
    ];

    console.log(this.state.iconsIndex);

    return (
      <div className="Bai_2">
        {icons[this.state.iconsIndex[0]]}
        {icons[this.state.iconsIndex[1]]}
        <br />

        <button onClick={this.handleClick}>Click </button>
      </div>
    );
  }
}

export default Bai_2;
