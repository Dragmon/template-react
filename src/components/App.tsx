import React from 'react';

const App = () => {
  const x: number = 1;
  const message: string = 'Este es el componente App'
  return (
    <div className='App'>
      <h1>{message} {x}</h1>
    </div>
  );
};

export default App;
