import React, { Component } from "react";

class Workout extends Component {
  constructor() {
    super();
    this.renderWorkout = this.renderWorkout.bind(this);
  }
  renderWorkout(num) {
    if (num === 1) {
      return (
        <div>
          <h2>Workout {num}</h2>
          <h3>Squat</h3>
          <h3>Bench</h3>
          <h3>Chinup</h3>
        </div>
      );
    } else if (num === 2) {
      return (
        <div>
          <h2>Workout {num}</h2>
          <h3>Deadlift</h3>
          <h3>Dip</h3>
          <h3>Bent Over Row</h3>
        </div>
      );
    } else if (num ===3) {
      return (
        <div>
          <h2>Workout {num}</h2>
          <h3>Squat</h3>
          <h3>Shoulder Press</h3>
          <h3>Pullup</h3>
        </div>
      );
    }
  }
  render() {
    return(
      <div>
        {this.props.number.day}
        { this.renderWorkout(this.props.number.day) }
      </div>
    )
  }
}

export default Workout;
