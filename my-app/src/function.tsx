import React from 'react';

// Step 1: Define a type/interface for props
interface GreetingProps {
  name: string; // 'name' prop must be a string
}

// Step 2: Add props type to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // JSX remains the same
};

export default Greeting;
