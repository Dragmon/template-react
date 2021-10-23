import React from 'react';

const App = () => {
  const x = 1;
  const message = 'Este es el componente App'
  return (
    <div className='App'>
      <h1>{message} {x}</h1>
    </div>
  );
};

export default App;
