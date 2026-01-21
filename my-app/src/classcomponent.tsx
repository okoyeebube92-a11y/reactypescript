import React, { Component } from 'react';

// Step 1: Define interface for state
interface CounterState {
  count: number;
}

// Step 2: No props needed, but you can define if needed
interface CounterProps {}

// Step 3: Extend Component with props and state types
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Initialize state with type safety
  state: CounterState = {
    count: 0,
  };

  // Step 5: Define increment method
  increment = (): void => {
    // setState automatically knows count is a number
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Render method remains mostly the same
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
