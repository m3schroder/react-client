import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span
            style={this.styles.span}
            className={this.function.getBadgeClasses()}
          >
            {this.function.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn m-1"
          >
            +
          </button>
          {counter.value > 0
            ? this.function.deleteEnabled()
            : this.function.deleteDisabled()}
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn m-1"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  function = {
    getBadgeClasses: () => {
      let classes = "badge m-1 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    },
    formatCount: () => {
      const { value: count } = this.props.counter;
      return count === 0 ? "Zero" : count;
    },
    deleteDisabled: () => {
      return (
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn m-1"
          disabled
        >
          -
        </button>
      );
    },
    deleteEnabled: () => {
      return (
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn m-1"
        >
          -
        </button>
      );
    },
  };

  styles = {
    span: {
      fontSize: 25,
      fontWeight: "bold",
    },
  };
}

export default Counter;
