import React from 'react'

let random = [
    "fa-solid fa-dice-six",
    "fa-solid fa-dice-five",
    "fa-solid fa-dice-four",
    "fa-solid fa-dice-three",
    "fa-solid fa-dice-two",
    "fa-solid fa-dice-one",
];
class RoleDice extends React.Component {
    constructor(props) {
        super();
        this.state = {
            className: "",
            dice1: "fa-solid fa-dice-one",
            dice2: "fa-solid fa-dice-six",
        };
    }
    handleRoll = () => {
        this.setState({
            className: "shaking",
            dice1: random[Math.floor(Math.random() * random.length)],
            dice2: random[Math.floor(Math.random() * random.length)],
        });
        setTimeout(() => {
            this.setState({
                className: "",
            });
        }, 1000);
    };

    render() {
        return (
            <div className="wrapper">
                <Die
                    data={{
                        className: this.state.className,
                        dice1: this.state.dice1,
                        dice2: this.state.dice2,
                    }}
                />
                <button onClick={this.handleRoll}>Roll Dice</button>
            </div>
        );
    }
}

class Die extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        console.log(this.props.data);
        return (
            <div className="list-xucsac">
                <span className="xucsac1 xucsac">
                    <i
                        className={this.props.data.dice1 + " " + this.props.data.className}
                    ></i>
                </span>
                <span className="xucsac2 xucsac">
                    <i
                        className={this.props.data.dice2 + " " + this.props.data.className}
                    ></i>
                </span>
            </div>
        );
    }
}



export default RoleDice