import React from 'react';

const App = () => {
  return <h1>Hello, React with Webpack! {process.env.REACT_APP_API_URL}</h1>;
};

export default App;