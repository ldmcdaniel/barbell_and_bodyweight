import React, { Component } from "react";
import Workout from './Workout';

class Home extends Component {
  constructor() {
    super();
    this.setWorkout = this.setWorkout.bind(this);
    this.state = {
      workout: {
        day: 1,
      },
    }
  }
  setWorkout() {
    const workout = {...this.state.workout};
    workout.day = this.num.value;
    this.setState({ workout });
  }
  render() {
    return(
      <div>
        <select ref={(input) => this.num = input} onChange={() => this.setWorkout()}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Workout number={this.state.workout}/>
      </div>
    )
  }
}

export default Home;
