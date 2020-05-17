import * as React from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    setTimeout(() => {
      console.log(new Date())
    },1000)
  }, [])

  return (
    <div className="ts-counter">
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1) }>Increment</button>
      <button onClick={() => setCounter(counter - 1) }>Decrement</button>
    </div>
  );
}

export default Counter