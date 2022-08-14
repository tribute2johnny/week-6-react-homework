import React from 'react';
import './App.css';

function App(name, age) {

  name = 'Johnny';
  age = 37;

  return (
    <div>
    <h1>Hello World</h1>
    <p> React! Don't do it! </p>
    <p> My name is {name} and I'm {age} years old.</p>
    </div>
  );
}

export default App;
