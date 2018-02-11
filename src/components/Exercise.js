import React, { Component } from "react";
import '../App.css';

class Exercise extends Component {
  render() {
    return (
      <section id="page">
        <header>Exercise Name</header>
        <main>
          <span class="square">Warmup</span>
          <span class="square">Warmup</span>
          <span class="square">Warmup 1</span>
          <span class="square">Reps</span>
          <span class="square">Warmup 2</span>
          <span class="square">Reps</span>
          <span class="square">Warmup 3</span>
          <span class="square">Reps</span>
          <span class="square">Work 1</span>
          <span class="square">Reps</span>
          <span class="square">Work 2</span>
          <span class="square">Reps</span>
          <span class="square">Work 3</span>
          <span class="square">Reps</span>
        </main>
        <footer>Settings</footer>
      </section>
    )
  };
}

export default Exercise;
